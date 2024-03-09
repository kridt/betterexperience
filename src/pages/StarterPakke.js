import React from "react";
import Navigation from "../components/Navigation";
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";

export default function StarterPakke() {
  return (
    <div
      style={{
        backgroundColor: "#3C3E42",
      }}
    >
      <Navigation />
      <h2
        style={{
          color: "white",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        Her kommer der en step by step guide til at komme i gang.
      </h2>

      <Tabs defaultValue={1}>
        <TabsList>
          <Tab value={1}>Step 1</Tab>
          <Tab value={2}>Step 2</Tab>
          <Tab value={3}>Step 3</Tab>
          <Tab value={4}>Step 4</Tab>
        </TabsList>
        <TabPanel value={1}>
          <Step1 />
        </TabPanel>
        <TabPanel value={2}>
          <Step2 />
        </TabPanel>
        <TabPanel value={3}>
          <Step3 />
        </TabPanel>
        <TabPanel value={4}>
          <Step4 />
        </TabPanel>
      </Tabs>
    </div>
  );
}
