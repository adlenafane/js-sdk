import { ClientOptions, ClientOptionsDefaults} from './clientOptions'

export interface ImplicitConfig {
  id: string;
  uri: string;
}

function implicit({ id, uri }: ImplicitConfig, options: ClientOptions = ClientOptionsDefaults): string {
  const _options = Object.assign({}, ClientOptionsDefaults, options);
  return `${_options.apiHostname}/oauth/authorize?response_type=token&client_id=${encodeURIComponent(id)}&redirect_uri=${encodeURIComponent(uri)}`;
}

export default implicit
