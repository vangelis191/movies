import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";

export default function NotFound() {
  return (
    <main style={{ display: "flex", flex: 1, height: "100vh",backgroundColor:'white' }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <h2 style={{margin:'20px',fontSize:'3rem'}}>There was a problems</h2>
        <p style={{margin:'20px',fontSize:'2rem'}}>
          We could not find the page you were looking for.{" "}
          <Link href="/" className="dashboard" style={{ textDecoration: "underline" }}>
            Dashboard
          </Link>
        </p>
      </div>
    </main>
  );
}
