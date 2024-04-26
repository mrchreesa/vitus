function CustomHeading({ text }) {
  // Split the text into words
  const words = text.split(" ");
  console.log(words);
  // Check if there's only one word or more
  if (words.length === 1) {
    // Only one word, apply underline directly
    return (
      <h1
        className="underline underline-offset-[5px] sm:underline-offset-[18px] hover:underline-offset-[12px] decoration-1 text-green hover:text-greenVeryDark transition-all duration-200"
        style={{ opacity: 1 }}
      >
        {words[0]}
      </h1>
    );
  } else {
    // More than one word, underline only the last word
    const lastWordIndex = words.length - 1;
    return (
      <h1 className="text-green hover:text-greenVeryDark">
        {words.slice(0, lastWordIndex).join(" ")}{" "}
        <span
          className="underline flex flex-wrap w-min underline-offset-[18px] hover:underline-offset-[12px] decoration-1 transition-all duration-200"
          style={{ opacity: 1 }}
        >
          {words[lastWordIndex]}
        </span>
      </h1>
    );
  }
}
export default CustomHeading;
