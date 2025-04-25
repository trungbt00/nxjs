"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Container, Col, Button, Dropdown, Image } from "react-bootstrap";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

export default function Header() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const userEmail = useSelector((state: RootState) => state.auth.userEmail);
  const { t } = useTranslation();
  const router = useRouter();

  const handleLogoutConfirmation = () => {
    router.push("/logout");
  };

  return (
    <header className="header">
      <Container className="d-flex justify-content-between align-items-center py-2">
        <Col md={5} className="d-flex align-items-start">
          <Link href={`/`}>
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
                id="user-menu"
                className="d-flex align-items-center gap-2 border-0 bg-transparent shadow-none"
                style={{ padding: 0 }}
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
                <Dropdown.Item onClick={handleLogoutConfirmation}>
                  {t("logout")}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Link href={`/login`}>
              <Button
                style={{
                  backgroundColor: "#333192",
                  borderColor: "#333192",
                  fontSize: "0.8em",
                  padding: "10px 30px",
                  color: "white",
                  borderRadius: "8px",
                  whiteSpace: "nowrap",
                }}
              >
                {t("login")}
              </Button>
            </Link>
          )}
        </div>
      </Container>
    </header>
  );
}
