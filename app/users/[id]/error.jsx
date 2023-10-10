'use client'
import React from "react";

export default function error() {
  return (
    <div>
      {error}
      <button onClick={()=>reset()}> try again </button>
    </div>
  );
}
