"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";
import { memo } from "react";

const ThemeButton = () => {
    const { setTheme, theme } = useTheme();

    return (
        <div>
            <Toggle
                variant="outline"
                className="group dark:hover:bg-muted size-9 dark:bg-transparent"
                pressed={theme === "dark"}
                onPressedChange={() =>
                    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                }
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
                <MoonIcon
                    size={16}
                    className="shrink-0 scale-0 opacity-0 transition-all dark:scale-100 group-dark:opacity-100"
                    aria-hidden="true"
                />
                <SunIcon
                    size={16}
                    className="absolute shrink-0 scale-100 opacity-100 transition-all group-dark:scale-0 group-dark:opacity-0"
                    aria-hidden="true"
                />
            </Toggle>
        </div>
    );
};

export default memo(ThemeButton);