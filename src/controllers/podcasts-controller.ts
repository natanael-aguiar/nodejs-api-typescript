import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEspisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { FilterPodcastModel } from "../models/filter-podcast-model";

export const getListEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content: FilterPodcastModel = await serviceListEpisodes();
  response.writeHead(content.statusCode, { "Content-Type": ContentType.JSON });
  response.write(JSON.stringify(content.body));
  response.end();
};

export const getFilterEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content: FilterPodcastModel = await serviceFilterEspisodes(request.url);
  response.writeHead(content.statusCode, { "Content-Type": ContentType.JSON });
  response.write(JSON.stringify(content.body));
  response.end();
};
