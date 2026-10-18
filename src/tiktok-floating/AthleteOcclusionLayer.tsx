import React from "react";

export interface AthleteOcclusionLayerProps {
  exerciseId: string;
  showNeonContour?: boolean;
  children: React.ReactNode;
}

export const AthleteOcclusionLayer: React.FC<AthleteOcclusionLayerProps> = ({
  children,
}) => {
  // Return clean floating HUD without primitive wireframe outlines
  return <>{children}</>;
};


