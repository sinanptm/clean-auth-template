"use client";

import { memo, useEffect } from "react";
import useIsLoading from "@/hooks/store/useLoading";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingOverlayProps {
  loading?: boolean;
}

/**
 * A full-screen loading overlay component that displays a visual loading animation.
 * It can be triggered by an internal global loading state (managed by `useIsLoading` hook)
 * or by an external `loading` prop. When active, it prevents scrolling on the body.
 *
 * @component
 * @param {LoadingOverlayProps} props - The props for the LoadingOverlay component.
 * @param {boolean} [props.loading=false] - An optional boolean to explicitly control the loading state.
 *   If true, the overlay will be shown. This prop is combined with the global loading state.
 *
 * @returns {JSX.Element | null} The loading overlay component or null if not loading.
 *
 * @example
 * To use with global loading state (e.g., from API calls):
 * <LoadingOverlay loading />
 *
 * @example
 * To use with a specific component's loading state:
 * const [componentLoading, setComponentLoading] = useState(false);
 * ... some async operation
 * <LoadingOverlay loading={componentLoading} />
 *
 * @remarks
 * This component uses `framer-motion` for smooth entry and exit animations.
 * It also modifies the `document.body.style.overflow` to `hidden` when loading
 * to prevent scrolling, and restores it to `unset` when loading finishes or the component unmounts.
 */
const LoadingOverlay = ({ loading = false }: LoadingOverlayProps) => {
  const globalLoading = useIsLoading((state) => state.isLoading);
  const isLoading = globalLoading || loading;

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="flex flex-col items-center space-y-6"
            aria-disabled={true}
            aria-hidden={true}
            aria-busy={true}
            aria-live="polite"
            aria-label="Loading..."
          >
            <div className="flex space-x-3">
              {[0, 1, 2, 3, 4].map((index) => (
                <motion.div
                  key={index}
                  className="w-4 h-4 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(LoadingOverlay);
