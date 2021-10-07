import { useColorMode, Box, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box mr={4}>
      {colorMode === "dark" ? (
        <IconButton
          aria-label="dark"
          bg="transparent"
          fontSize="20px"
          icon={<SunIcon />}
          onClick={toggleColorMode}
        />
      ) : (
        <IconButton
          aria-label="light"
          bg="transparent"
          icon={<MoonIcon />}
          onClick={toggleColorMode}
          fontSize="20px"
        />
      )}
    </Box>
  );
}
