export type SessionStatus =
  | "Active"
  | "Idle"
  | "Expired";

export interface Session {
  id: string;

  user: string;

  role: string;

  device: string;

  browser: string;

  ipAddress: string;

  loginTime: string;

  lastActivity: string;

  status: SessionStatus;
}