import { FilterPodcastModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEspisodes = async (
  podcastName: string | undefined
): Promise<FilterPodcastModel> => {
  // Defini a interface de retorno
  let responseFormat: FilterPodcastModel = {
    statusCode: 0,
    body: [],
  };

  // Buscando dados
  const queryString = podcastName?.split("p=")[1] ?? "";
  const data = await repositoryPodcast(queryString);

  // Verifico se tem conteúdo
  if (data.length !== 0) {
    responseFormat.statusCode = StatusCode.OK;
  } else {
    responseFormat.statusCode = StatusCode.NO_CONTENT;
  }

  responseFormat.body = data;

  return responseFormat;
};
