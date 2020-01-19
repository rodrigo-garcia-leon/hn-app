function formatTime(time, now = new Date().getTime()) {
  const minutes = Math.floor((now / 1000 - time) / 60);
  const hours = Math.floor(minutes / 60);

  return minutes < 60
    ? `${minutes} minute${minutes === 1 ? "" : "s"}`
    : `${hours} hour${hours === 1 ? "" : "s"}`;
}

export { formatTime };
