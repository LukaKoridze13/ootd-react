export const useCameraAllowed = async (): Promise<boolean> => {
  const cameraPermission = await navigator.permissions.query({ name: "camera" as PermissionName });
  if (cameraPermission.state === "granted") {
    return true;
  } else {
    return false;
  }
};
