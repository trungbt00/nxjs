"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const LogoutConfirmModal = dynamic(
  () => import("@/components/LogoutConfirmModal"),
  { ssr: false, loading: () => <div className="loading-text">Loading...</div> }
);

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, []);

  const handleHide = () => {
    router.back();
  };

  return (
    <div className="logout-modal-overlay">
      <LogoutConfirmModal show={true} onHide={handleHide} />
    </div>
  );
}
