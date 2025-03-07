import { Center, Text } from "@mantine/core";

const ErrorPage = () => {
  return (
    <Center style={{ height: "100vh", width: "100%" }}>
      <Text
        style={{
          fontSize: "10rem",
          lineHeight: "1",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        404
      </Text>
    </Center>
  );
};

export default ErrorPage;
