import JThreeObject=require('Base/JThreeObject');
import GomlTreeNodeBase = require("../GomlTreeNodeBase");
class GomlTreeVpNode extends GomlTreeNodeBase {
    constructor(elem: Element)
    {
        super(elem);
        console.log(elem.parentNode);
    }
}

export=GomlTreeVpNode;