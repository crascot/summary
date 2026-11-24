// "@specialty" is an alias for one of locales/specialties/*.json,
// the file is chosen in webpack.config.js.
import content from "@specialty";
import { SpecialtyContent } from "./types/contentType";

export const SPECIALTY: SpecialtyContent = content;
