const getNodeStartItem = node => ({
  type: "nodeStart",
  tagName: node.tagName,
  attributes: Array.from(node.attributes).map(att => [att.name, att.nodeValue])
});

const getNodeEndItem = node => ({
  type: "nodeEnd"
});

const extractChildTextNodes = el =>
  Array.from(el.childNodes).map(child => {
    if (child.nodeType === 3) {
      return child.nodeValue;
    } else {
      return child;
    }
  });

const itemizeNode = el => [
  getNodeStartItem(el),
  ...extractChildTextNodes(el),
  getNodeEndItem(el)
];

function convertNodesToItems(queue) {
  let nextQueue = queue
    .map(item => {
      if (item instanceof HTMLElement) {
        return itemizeNode(item);
      } else {
        return item;
      }
    })
    .flat();

  if (queue.length !== nextQueue.length) {
    return convertNodesToItems(nextQueue);
  } else {
    return queue;
  }
}

export default function HTMLStringToQueue(string) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(string, "text/html");
  let queue = extractChildTextNodes(doc.body);
  return convertNodesToItems(queue);
}
