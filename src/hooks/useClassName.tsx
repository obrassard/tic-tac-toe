import { useMemo } from "react";

function join(classes: (string | Record<string, boolean>)[]) {
  return classes
    .flatMap((c) => {
      if (typeof c === "string") {
        return c;
      } else {
        return Object.keys(c).filter((k) => c[k]);
      }
    })
    .filter((c) => c !== "")
    .join(" ");
}

/**
 * Exemple :
 * useClassNames("class1", { class2: true, class3: false }) => "class1 class2"
 */
export function useClassNames(
  ...classes: (string | Record<string, boolean>)[]
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => join(classes), classes);
}