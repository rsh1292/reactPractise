export function shimmer() {
  return (
    <>
      {Array(15)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            style={{ padding: "10px", width: "300px", height: "300px" }}
          >
            <div
              style={{
                backgroundColor: "lightgray",
                width: "100%",
                height: "100%",
              }}
            ></div>
          </div>
        ))}
    </>
  );
}
