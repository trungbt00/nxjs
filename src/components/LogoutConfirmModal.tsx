"use client";

import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

interface LogoutConfirmModalProps {
  show: boolean;
  onHide: () => void;
}

export default function LogoutConfirmModal({
  show,
  onHide,
}: LogoutConfirmModalProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{t("ttlogout")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t("cflogout")}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          {t("cancel")}
        </Button>
        <Button variant="danger" onClick={handleLogout}>
          {t("logout")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
