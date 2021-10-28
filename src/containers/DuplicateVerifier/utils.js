const dfs = (node, path = [], current = {}) => {
  if (typeof node === "string") {
    if (current[node]) {
      return current[node].push(path.join("."));
    }
    return (current[node] = [path.join(".")]);
  }

  Object.keys(node).forEach((key) => {
    dfs(node[key], [...path, key], current);
  });
  return current;
};

const clear = (result) =>
  Object.keys(result)
    .filter((key) => result[key]?.length > 1)
    .reduce(
      (acc, curr) => ({
        ...acc,
        [curr]: result[curr],
      }),
      {}
    );

const checkForDuplicates = (data, system) => {
  const result = dfs(data, [system], {});
  return clear(result);
};

export { checkForDuplicates };
