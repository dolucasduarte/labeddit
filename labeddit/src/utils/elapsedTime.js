const elapsedTime = createdAt => {
  const now = new Date().getTime();
  const milisseconds = now - createdAt;
  const minutes = milisseconds * 1.6667e-5;
  const hours = Math.floor(milisseconds / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);

  if (minutes < 1) return `less than one minute ago`;
  if (hours < 1) return `${Math.ceil(minutes)} minutes ago`;
  if (hours === 1) return `${hours} hour ago`;
  if (hours < 24) return `${hours} hours ago`;
  if (days === 1) return `${days} day ago`;
  if (days < 30) return `${days} days ago`;
  if (months === 1) return `${months} month ago`;
  if (months > 1) return `${months} months ago`;
};

export default elapsedTime;
