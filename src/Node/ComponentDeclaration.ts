import GrimoireInterface from "../GrimoireInterface";
import Attribute from "./Attribute";
import NSDictionary from "../Base/NSDictionary";
import IAttributeDeclaration from "./IAttributeDeclaration";
import NSIdentity from "../Base/NSIdentity";
import Component from "./Component";

class ComponentDeclaration {

  public attributes: { [key: string]: IAttributeDeclaration };

  public constructor(
    public name: NSIdentity,
    attributes: { [name: string]: IAttributeDeclaration },
    public ctor: new () => Component) {
    this.attributes = attributes;
  }

  public generateInstance(componentElement?: Element): Component {
    componentElement = componentElement ? componentElement : document.createElementNS(this.name.ns, this.name.name);
    const component = new this.ctor();
    componentElement.setAttribute("x-gr-id", component.id);
    GrimoireInterface.componentDictionary[component.id] = component;
    component.name = this.name;
    component.element = componentElement;
    component.attributes = new NSDictionary<Attribute>();
    for (let key in this.attributes) {
      Attribute.generateAttributeForComponent(key, this.attributes[key], component);
    }
    return component;
  }
}

export default ComponentDeclaration;
