/**
 * [https://standards.buildingsmart.org/IFC/RELEASE/IFC2x3/FINAL/HTML/ifcrepresentationresource/lexical/ifcGeometricrepresentationcontext.htm]
 */
import { IfcRepresentationContext } from "./IfcRepresentationContext";
import { getIfcAxis2Placement3D } from "./IfcAxis2Placement3D";
import { getIfcDirection } from "./IfcDirection";
import { baseMultiConstructor } from "./IfcBase";

class IfcGeometricRepresentationContext extends IfcRepresentationContext {
  getIfcProperties() {
    super.getIfcProperties();
    this.coordinationSpaceDimension = this.extractNumber();
    this.precision = this.extractNumber();
    this.worldCoordinateSystem = getIfcAxis2Placement3D(this, this.extractId());
    this.trueNorth = getIfcDirection(this, this.extractId());
  }
}

function getIfcGeometricRepresentationContexts(caller) {
  return baseMultiConstructor(caller, IfcGeometricRepresentationContext);
}

export { getIfcGeometricRepresentationContexts };