function getFormattedDateTime() {
  const now = new Date();
  const day = now.getDate();
  const month = now.toLocaleString("ru-RU", { month: "long" });
  const time = now.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return { day, month, time };
}

const { day, month, time } = getFormattedDateTime();

export const getTime = () => {
  console.log(`Время вызова ${day} ${month}, время ${time}`);
};
