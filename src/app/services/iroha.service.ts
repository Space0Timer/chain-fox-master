import  * as grpc from '@grpc/grpc-js';
import {commands, queries} from 'iroha-helpers';
import { Injectable } from '@angular/core';

import {
  CommandService_v1Client as CommandService,
  QueryService_v1Client as QueryService
} from 'iroha-helpers/lib/proto/endpoint_pb_service';

const IROHA_ADDRESS = 'localhost:50051';

const commandService = new CommandService(IROHA_ADDRESS);
const queryService = new QueryService(IROHA_ADDRESS);

const COMMAND_OPTIONS = {
  privateKey: 'e2e3c49be71ae0e1721b1a573f3d49756b87fce58679243dd4bbe09008158cf0',
  creatorAccountId: 'admin@mini',
  commandService,
  timeoutLimit: 5000
};

const QUERY_OPTIONS = {
  privateKey: 'e2e3c49be71ae0e1721b1a573f3d49756b87fce58679243dd4bbe09008158cf0',
  creatorAccountId: 'admin@mini',
  queryService,
  timeoutLimit: 5000
};

@Injectable({
  providedIn: 'root'
})

export class IrohaService {

    getName(id) {
      return queries.getAccount(QUERY_OPTIONS, id);
    }

}

