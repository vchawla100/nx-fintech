
export const handlePreview = (value, attr) => {
    if (attr === 'email') {
      const [username, domain] = value.split('@');
      const previewedUsername = username.substring(0, Math.min(username.length, 2)) + '*'.repeat(Math.max(0, username.length - 2));
      return `${previewedUsername}@${domain}`;
    } else if (attr === 'vehicleNo') {
      const lastDigits = value.slice(-4);
      return `**${'*'.repeat(Math.max(0, value.length - 6))}${lastDigits}`;
    } else if (attr === 'number') {
      return `**${'*'.repeat(Math.max(0, value.length - 4))}${value.slice(-4)}`;
    }
    // Default for other attributes like 'name'
    return value;
  };
  