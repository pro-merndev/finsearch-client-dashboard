"use client";

import { useState, useRef, useEffect } from "react";
import { Input, Group, Chip, Box, Transition, Paper } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const SearchBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the search component to collapse it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFocus = () => {
    setExpanded(true);
  };

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
  };

  return (
    <Box
      ref={searchRef}
      style={{ position: "relative", width: expanded ? 400 : 200 }}
    >
      <Input
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.currentTarget.value)}
        onFocus={handleFocus}
        leftSection={<IconSearch size={16} />}
        styles={{
          wrapper: {
            transition: "width 0.3s ease",
            width: "100%",
          },
          input: {
            transition: "all 0.3s ease",
            borderRadius: expanded ? "8px 8px 0 0" : "8px",
          },
        }}
      />

      <Transition mounted={expanded} transition="fade" duration={200}>
        {(styles) => (
          <Paper
            shadow="sm"
            p="md"
            style={{
              ...styles,
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              zIndex: 10,
              borderTop: "none",
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
          >
            <Group gap="xs">
              <Chip.Group
                value={selectedFilter}
                onChange={(value) => handleFilterChange(value as string)}
              >
                <Group gap="xs">
                  <Chip value="All" variant="filled" size="xs">
                    All
                  </Chip>
                  <Chip value="Plans" variant="filled" size="xs">
                    Plans
                  </Chip>
                  <Chip value="RIAs" variant="filled" size="xs">
                    RIAs
                  </Chip>
                  <Chip value="Family Offices" variant="filled" size="xs">
                    Family Offices
                  </Chip>
                  <Chip value="Managers" variant="filled" size="xs">
                    Managers
                  </Chip>
                  <Chip value="Videos" variant="filled" size="xs">
                    Videos
                  </Chip>
                  <Chip value="Documents" variant="filled" size="xs">
                    Documents
                  </Chip>
                  <Chip value="News & Updates" variant="filled" size="xs">
                    News & Updates
                  </Chip>
                </Group>
              </Chip.Group>
            </Group>

            
          </Paper>
        )}
      </Transition>
    </Box>
  );
};

export default SearchBar;
