import { Provider } from '../app/shared/provider.interface';

export class AddProvider {
  static readonly type = '[Providers] Add';
  constructor(public payload: Provider) {}
}
export class GetProviders {
  static readonly type = '[Providers] Get';
}
export class UpdateProvider {
  static readonly type = '[Providers] Update';
  constructor(public payload: Provider) {}
}
export class DeleteProvider {
  static readonly type = '[Providers] Delete';
  constructor(public id: number) {}
}
