import { default as bugpilotConfig } from "./bugpilot.config.js";
import { withBugpilot } from "@bugpilot/plugin-nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {};
export default withBugpilot(nextConfig, bugpilotConfig);