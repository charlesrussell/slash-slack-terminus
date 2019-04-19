var ERRORS = {
    NO_VALID_COMMAND: 'Whoops, you failed to provide an valid Pantheon Site command'
};

function slashTerminus(token, options) {
    //var client = new Heroku(options);
    this.token = token;
    //this.jiraOpts = options.jira;

    // We should have initialized http to jenkins here

}

slashTerminus.prototype.handle = function (req, cb) {
    if (process.env.DEBUG) console.log(req)
    var bodyText = req.body.text;
    var pantheonCmd = bodyText;
    console.log(`Executing Pantheon command: ${pantheonCmd}`);
    if (!bodyText) {
        return cb(null,this._createSlackMessage(ERRORS.NO_VALID_COMMAND));
    }
    // Sending to Bitrise
    return this._executePantheonCmdAtBitrise(pantheonCmd, cb);
};

slashTerminus.prototype._executePantheonCmdAtBitrise = function (pantheonCmd, cb) {
    var self = this;
    return cb(null,self._createSlackMessage(pantheonCmd + ' would have been executed!'));
    //this.client.app(appName).dynos.restart(function (err) {
    //    if (err) {
    //        return cb(null,self._createSlackMessage("Unable to restart app, did you spell it properly? " + appName));
    //    } else {
    //        return cb(null,self._createSlackMessage(appName + ' has been rebooted at Heroku!'));
    //    }
    //})
};

slashTerminus.prototype._createSlackMessage = function (slackMessage) {
    return slackMessage;
};

module.exports = slashTerminus;
