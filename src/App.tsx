import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRouter from "./components/auth/AuthRouter";
import PagesRouter from "./components/pages/PagesRouter";
import LoginGuard from "./guards/loginGuard";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="auth/*" element={<AuthRouter />} />

        <Route
          path="pages/*"
          element={
            <LoginGuard>
              <PagesRouter />
            </LoginGuard>
          }
        />
      </Routes>
    </div>
  );
}
