"use client"
import { useState } from "react";
import Body from "./component/Body";
import Header from "./component/Header";

export default function Home() {

  const [fillterPrompt, setFilterPrompt] = useState("")

  return (
    <>
      <Header setFilterPrompt={setFilterPrompt}/>
      <Body fillterPrompt={fillterPrompt}/>
    </>
  );
}
