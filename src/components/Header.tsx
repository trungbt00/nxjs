"use client";

import Link from "next/link";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { Container, Col, Button, Dropdown, Image } from "react-bootstrap";
import { logout } from "../redux/authSlice";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const { t } = useTranslation();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const userEmail = useSelector((state: RootState) => state.auth.userEmail);

  const showLogoutDialog = () => dialogRef.current?.showModal();
  const handleCloseDialog = () => dialogRef.current?.close();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
    dialogRef.current?.close();
  };

  return (
    <header className="header">
      <Container className="d-flex justify-content-between align-items-center py-2">
        <Col md={5} className="d-flex align-items-start">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="me-2"
            />
          </Link>
          <div style={{ fontSize: "0.9em" }}>
            <strong style={{ color: "#333192" }}>BỘ CÔNG AN</strong> <br />
            <strong style={{ color: "#333192" }}>
              CỤC CẢNH SÁT GIAO THÔNG
            </strong>
          </div>
        </Col>

        <div className="d-flex align-items-center" style={{ gap: "10px" }}>
          <LanguageSwitcher />

          {isLoggedIn ? (
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="light"
                className="d-flex align-items-center gap-2 border-0 bg-transparent shadow-none p-0"
              >
                <Image
                  src="/avatar.png"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  roundedCircle
                />
                <span style={{ fontSize: "0.9em" }}>{userEmail}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/profile">{t("acc_info")}</Dropdown.Item>
                <Dropdown.Item onClick={showLogoutDialog}>
                  {t("logout")}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Link href="/login">
              <Button
                style={{
                  backgroundColor: "#333192",
                  borderColor: "#333192",
                  fontSize: "0.8em",
                  padding: "10px 30px",
                  color: "white",
                  borderRadius: "8px",
                }}
              >
                {t("login")}
              </Button>
            </Link>
          )}
        </div>
      </Container>

      <dialog
        ref={dialogRef}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
          border: "none",
          borderRadius: "10px",
          padding: "2rem",
          width: "min(90%, 400px)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          margin: 0,
          background: "white",
        }}
        onCancel={handleCloseDialog}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            textAlign: "center",
          }}
        >
          <h3 style={{ margin: 0, color: "#333" }}>{t("ttlogout")}</h3>
          <p style={{ color: "#666", margin: 0 }}>{t("cflogout")}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            <Button
              variant="secondary"
              onClick={handleCloseDialog}
              style={{ width: "45%", padding: "0.5rem" }}
            >
              {t("cancel")}
            </Button>
            <Button
              variant="danger"
              onClick={handleLogout}
              style={{ width: "45%", padding: "0.5rem" }}
            >
              {t("logout")}
            </Button>
          </div>
        </div>
      </dialog>

      <style jsx>{`
        dialog::backdrop {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(3px);
        }
      `}</style>
    </header>
  );
}
