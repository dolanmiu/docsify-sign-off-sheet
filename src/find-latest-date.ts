import { parseDate } from "chrono-node";

export const findLatestDate = (nodeList: NodeList): Date | null => {
  const arr = Array.from(nodeList) as Element[];
  const date =
    arr
      .map((node) => {
        const output = Array.from(node.children)
          .map((child) => child.textContent)
          .filter((d) => !!d)
          .map((d) => d as string)
          .map((text) => parseDate(text))
          .filter((d) => !!d);
        output.sort((a, b) => b.getTime() - a.getTime());

        return output[0];
      })
      .filter((d) => !!d)
      .reduce(
        (acc, curr) => (curr.getTime() > acc.getTime() ? curr : acc),
        new Date(0)
      ) ?? new Date(0);

  return date.getTime() === 0 ? null : date;
};
