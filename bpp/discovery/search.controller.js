// import SearchService from './search.service.js';
// import NoRecordFoundError from "../../shared/lib/errors/no-record-found.error.js";
// import { PROTOCOL_CONTEXT, SUBSCRIBER_TYPE } from '../../shared/utils/seller_enums.js';
// import messages from '../../shared/utils/messages.js';
// import {  getProviderByName, searchProductbyName } from "../../shared/db/dbService.js";
// import { getSubscriberType } from "../../shared/utils/registryApis/registryUtil.js";
// import CustomLogs from '../../shared/utils/customLogs.js';
// import { isSignatureValid } from '../../shared/utils/cryptic.js';
// import { State_STD_Codes } from '../../shared/utils/stateSTDCodes.js';
import { Emitter } from '../emitter/emitter.js';
import { setContext } from '../config/global_context.js';
// const searchService = new SearchService();

class SearchController {

    /**
    * search
    * @param {*} req    HTTP request object
    * @param {*} res    HTTP response object
    * @param {*} next   Callback argument to the middleware function
    * @return {callback}
    */
    async bppSearch(req, res, next) {
        let data = {
            response: JSON.stringify(req.body),
        }
        setContext(req.body.context)
        Emitter("seller_search", data)
        setTimeout(() => {
            return res.status(200).send({
                "ack": {
                  "status": "ACK"
                }
              });
          }, 2000);

        }

    /**
    * search
    * @param {*} req    HTTP request object
    * @param {*} res    HTTP response object
    * @param {*} next   Callback argument to the middleware function
    * @return {callback}
    */
    bppOnSearch(req, res, next) {
        const searchRequest = req.body;

        searchService.bppOnSearch(searchRequest).then(response => {
            if (!response || response === null)
                throw new NoRecordFoundError("No result found");
            else
                res.json(response);
        }).catch((err) => {
            next(err);
        });
    }
}

export default SearchController;
