import { Document } from "mongoose";

export interface TeamInterface extends Document {
  schoolName: string;
  mascot: string;
  city: string;
  state: string;
  initials: string;
  primaryColor: string;
  secondaryColor?: string | null;
  thirdColor?: string | null;
  public: boolean;
  inState: boolean;
  county: string;
}
