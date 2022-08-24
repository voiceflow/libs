import { AlexaConstants, AlexaNode, AlexaProject } from "..";

/**
 * Stores survey results in Alexa projects
 * 
 * USAGE: BaseModels.Version.SurveyContext<AlexaSurveyContextExtension>
 */
export interface AlexaSurveyContextExtension {
    products: Record<string, AlexaProject.Product>;
    permissions: Set<AlexaNode.PermissionType>;
    interfaces: Set<AlexaConstants.InterfaceType>;
}
