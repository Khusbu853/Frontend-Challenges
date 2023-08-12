const useTraverseTree = () => {
    // Add a file or folder in tree
    const insertNode = function (tree, folderId, item, isFolder) {
      if (tree.id === folderId && tree.isFolder) {
        tree.items.unshift({
          id:new Date().getTime(),
          name: item,
          isFolder: isFolder,
          items: []
        });
  
        return tree;
      }
  
      let latestNode = [];
      latestNode = tree.items.map((ob) => {
        return insertNode(ob, folderId, item, isFolder);
      });
  
      return { ...tree, items: latestNode };
    };
  
    // delete the node
    function deleteNode(tree, id) {
      if(tree.id === id) {
        // console.log('Deleting -> ', tree.id);
        delete tree.id;
        delete tree.name;
        delete tree.isFolder;
        delete tree.items;
        return tree;
      }
  
      let latestTest = [];
      let filteredNodes = tree.items ? tree.items.filter(item => item.id !== id) : [];
      latestTest = filteredNodes?.map((item) => deleteNode(item, id));
      return {...tree, items: latestTest};
    }
  
  
  
    // const renameNode = () => {}; // Do it Yourself
    function updateNode(tree, id, item) {
      if(tree.id === id){
        tree.name = item;
        return tree;
      }
      
      let updatedItem = []
      updatedItem = tree.items.map((obj) => updateNode(obj, id, item))
      return {...tree, items: updatedItem}
  
    }
  
  
    return { insertNode, deleteNode, updateNode};
  };
  
  export default useTraverseTree;