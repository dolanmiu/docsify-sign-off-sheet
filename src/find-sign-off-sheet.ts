enum ScanStage {
  SCANNING,
  IDLE,
}

export const findSignOffSheet = function (el: ChildNode): ChildNode[] {
  let queue = [];
  let stage = ScanStage.IDLE;

  for (var i = 0; i < el.childNodes.length; i++) {
    var node = el.childNodes[i];

    if (
      node.nodeType === 8 &&
      node.nodeValue!.trim() === "sign-off-sheet:end"
    ) {
      stage = ScanStage.IDLE;
      return queue;
    }

    if (stage === ScanStage.SCANNING) {
      queue.push(node);
    }

    if (
      node.nodeType === 8 &&
      node.nodeValue!.trim() === "sign-off-sheet:start"
    ) {
      stage = ScanStage.SCANNING;
    } else {
      queue.push.apply(queue, findSignOffSheet(node));
    }
  }
  return queue;
};
