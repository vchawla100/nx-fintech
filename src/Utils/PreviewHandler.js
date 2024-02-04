export const handlePreview = (value, attr) => {
  if (attr === "email") {
    const [username, domain] = value.split("@");
    const maskedUsername =
      value.length > 2
        ? value.slice(0, 2) + "*".repeat(username.length - 2)
        : value;
    return `${maskedUsername}@${domain}`;
  } else if (attr === "number") {
    const visibleNumbers = value.slice(-4); // Get the last 4 characters
    const maskedNumbers = "*".repeat(value.length - 4);
    return `${maskedNumbers}${visibleNumbers}`;
  } else if (attr === "vehicleNo") {
    const firstTwo = value.slice(0, 2);
    const lastFour = value.slice(-4);
    const maskedChars = "*".repeat(value.length - 6); // Keep first 2 and last 4 visible
    return `${firstTwo}${maskedChars}${lastFour}`;
  }

  // Default for other attributes like 'name'
  return value;
};
