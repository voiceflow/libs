/**
 * Stores survey results in GA and DFES projects
 * 
 * USAGE: BaseModels.Version.SurveyContext<GaDfesSurveyContextExtension>
 */
export interface GaDfesSurveyContextExtension {
    goToIntentsSet: Set<string>;
}