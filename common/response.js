module.exports = {

    errorResponse: function (message, res) {
        return res.status(500).json({ result: {}, message: message, success: 0, statusCode: 500 });
    },
    successResponse: function (message, res, data) {
        return res.status(200).json({ result: data, message: message, success: 1, statusCode: 200 });
    },
    createdResponse: function (message, res, data) {
        return res.status(201).json({ result: data, message: message, success: 1, statusCode: 201 });
    },
    notFoundResponse: function (message, res) {
        return res.status(404).json({ result: {}, message: message, success: 0, statusCode: 404 });
    },
    unauthorizedRequest: function (message, res) {
        return res.status(401).json({ result: {}, message: message, success: 0, statusCode: 401 });
    }
}

module.exports = {
    continue: function (message, res) {
        return res.status(100).json({
            result: null,
            success: false,
            message: message,
            messageCode: "เครื่องให้บริการได้รับการร้องขอแล้ว และเครื่องลูกข่ายควรจะส่งเนื้อหาตามออกไปกับข้อความร้องขอ (ในกรณีที่เนื้อหาจำเป็นต้องส่งไปกับการร้องขอ เช่นข้อความร้องขอแบบ POST) ถ้าเนื้อหาในข้อความร้องขอมีขนาดใหญ่ การส่งข้อมูลไปยังเครื่องแม่ข่ายอาจเกิดการชะงัก การร้องขออาจถูกตัดไปเสียก่อนเพราะไม่มีส่วนหัวที่เหมาะสม ดังนั้นเพื่อให้เครื่องแม่ข่ายสามารถตรวจสอบได้ว่าการร้องขอนั้นจะเป็นที่ยอมรับได้หรือไม่ เครื่องลูกข่ายจะต้องส่งส่วนหัว Expect: 100-continue ไปในข้อความร้องขอครั้งแรก [2] และตรวจสอบว่ารหัสสถานภาพที่ได้มาจากข้อความตอบรับเป็น 100 Continue ก่อนดำเนินการส่งข้อมูลต่อไป (หากล้มเหลว จะได้รับรหัสเป็น 417 Expectation Failed และหยุดดำเนินการส่งข้อมูล)",
            statusCode: 100
        })
    },
    switchingProtocols: function (message, res) {
        return res.status(101).json({
            result: null,
            success: false,
            message: message,
            messageCode: "เกิดจากผู้ร้องขอที่ได้สอบถามให้เครื่องแม่ข่ายเปลี่ยนโพรโทคอลในการสื่อสาร เมื่อเครื่องแม่ข่ายรับทราบก็จะคืนรหัสสถานภาพนี้มายังผู้ร้องขอ แล้วจะดำเนินการเปลี่ยนโพรโทคอลตาม",
            statusCode: 101
        })
    },
    processing: function (message, res) {
        return res.status(102).json({
            result: null,
            success: false,
            message: message,
            messageCode: "เครื่องให้บริการกำลังประมวลผล",
            statusCode: 102
        })
    },
    ok: function (message, res, req) {
        return res.status(200).json({
            result: req,
            success: true,
            message: message,
            messageCode: "เป็นรหัสตอบรับมาตรฐานสำหรับการร้องขอที่สำเร็จ ข้อความตอบรับที่แท้จริงอาจแตกต่างกันออกไปตามคำสั่งร้องขอที่ใช้ ในการร้องขอแบบ GET เนื้อหาในข้อความตอบรับจะเป็นเนื้อหาที่เกี่ยวข้องกับทรัพยากรที่ร้องขอ ส่วนในการร้องขอแบบ POST เนื้อหาในข้อความตอบรับจะเป็นการอธิบายทรัพยากรหรือผลลัพธ์จากการดำเนินการดังกล่าว เป็นต้น",
            statusCode: 200
        })
    },
    created: function (message, res, req) {
        return res.status(201).json({
            result: req,
            success: true,
            message: message,
            messageCode: "การร้องขอได้ดำเนินการแล้ว ซึ่งได้ผลลัพธ์เป็นทรัพยากรที่สร้างขึ้นใหม่บนเครื่องให้บริการ",
            statusCode: 201
        })
    },
    accepted: function (message, res) {
        return res.status(202).json({
            result: null,
            success: false,
            message: message,
            messageCode: "การร้องขอได้รับแล้วเพื่อดำเนินการ แต่การดำเนินการนั้นยังไม่เสร็จสิ้น ซึ่งไม่จำเป็นต้องส่งการร้องขอใหม่ในช่วงเวลาดังกล่าว เพราะว่าเครื่องแม่ข่ายอาจยังไม่รับการร้องขอในขณะนั้น",
            statusCode: 202
        })
    },
    nonAuthoritativeInformation: function (message, res) {
        return res.status(203).json({
            result: null,
            success: false,
            message: message,
            messageCode: "การร้องขอได้ดำเนินการสำเร็จแล้ว แต่คืนผลลัพธ์เป็นข้อมูลที่อาจจะมาจากแหล่งอื่น (ตั้งแต่ HTTP/1.1)",
            statusCode: 203
        })
    },
    noContent: function (message, res) {
        return res.status(204).json({
            result: null,
            success: false,
            message: message,
            messageCode: "การร้องขอได้ดำเนินการสำเร็จแล้ว แต่ไม่มีเนื้อหาใด ๆ คืนกลับมา",
            statusCode: 204
        })
    },
    resetContent: function (message, res) {
        return res.status(205).json({
            result: null,
            success: false,
            message: message,
            messageCode: "การร้องขอได้ดำเนินการสำเร็จแล้ว แต่ไม่มีเนื้อหาใด ๆ คืนกลับมา ต่างจากรหัส 204 ตรงที่การตอบรับนี้ ผู้ร้องขอจำเป็นต้องล้างมุมมองของเอกสาร",
            statusCode: 205
        })
    },
    partialContent: function (message, res) {
        return res.status(206).json({
            result: null,
            success: false,
            message: message,
            messageCode: "เครื่องแม่ข่ายจะส่งเนื้อหาจากทรัพยากรเพียงบางส่วน ตามช่วงไบต์ในส่วนหัว Range ที่เครื่องลูกข่ายร้องขอไป การส่งทรัพยากรเพียงบางส่วนนี้มักใช้เป็นประโยชน์โดยโปรแกรมช่วยดาวน์โหลด เพื่อการดาวน์โหลดข้อมูลต่อหรือแบ่งการดาวน์โหลดออกเป็นหลายกระแสพร้อมกัน",
            statusCode: 206
        })
    },
    multiStatus: function (message, res, req) {
        return res.status(207).json({
            result: req,
            success: true,
            message: message,
            messageCode: "เนื้อหาในข้อความที่เป็นเอกซ์เอ็มแอล อาจมีรหัสสถานภาพในการตอบรับที่แยกจากกันจำนวนหนึ่ง ขึ้นอยู่กับว่ามีข้อความร้องขอย่อยมากเท่าใด (WebDAV)",
            statusCode: 207
        })
    },
    multipleChoices: function (message, res) {
        return res.status(300).json({
            result: null,
            success: false,
            message: message,
            messageCode: "แสดงตัวเลือกสำหรับทรัพยากรให้เครื่องลูกข่ายเลือกตามที่ต้องการ ตัวอย่างเช่น รูปแบบที่แตกต่างกันสำหรับวิดีโอ รายชื่อไฟล์ที่มีส่วนขยายแตกต่างกัน หรือการแก้ความกำกวมความหมายของคำ",
            statusCode: 300
        })
    },
    movedPermanently: function (message, res) {
        return res.status(301).json({
            result: null,
            success: false,
            message: message,
            messageCode: "บอกให้เครื่องลูกข่ายทราบว่า การร้องขอครั้งนี้และครั้งต่อ ๆ ไปควรจะเปลี่ยนทางไปยังตัวระบุแหล่งทรัพยากรสากล (URI) ที่ให้ไว้ เครื่องแม่ข่ายจะไม่เป็นผู้เปลี่ยนทางให้",
            statusCode: 301
        })
    },
    found: function (message, res) {
        return res.status(102).json({
            result: null,
            success: false,
            message: message,
            messageCode: 'รหัสนี้นิยมใช้เป็นการเปลี่ยนทางบนหน้าเว็บมากที่สุด แต่ก็เป็นตัวอย่างหนึ่งในทางปฏิบัติที่ขัดกับมาตรฐาน แต่เดิมใน HTTP/1.0 วลีดังกล่าวใช้ว่า "Moved Temporarily" เพื่อเป็นการเปลี่ยนทางชั่วคราว แต่หลายเบราว์เซอร์กลับนำไปทำเป็นรหัส 303 See Other แทน ดังนั้นในรุ่น HTTP/1.1 จึงเพิ่มรหัส 303 และ 307 เข้าไปเพื่อแยกแยะพฤติกรรมการใช้งานทั้งสอง แล้วเปลี่ยนวลีเหตุผลของรหัสนี้เป็น "Found" อย่างไรก็ตาม เว็บแอปพลิเคชันและเฟรมเวิร์กส่วนใหญ่ก็ยังใช้รหัส 302 ในลักษณะเดียวกับรหัส 303',
            statusCode: 102
        })
    },
    seeOther: function (message, res) {
        return res.status(303).json({
            result: null,
            success: false,
            message: message,
            messageCode: "เนื้อหาที่ร้องขอสามารถพบได้จากตัวระบุในแหล่งอื่นด้วยคำสั่ง GET แต่ถ้าหากแหล่งอื่นนั้นใช้ PUT เครื่องลูกข่ายจะต้องถือว่าเครื่องแม่ข่ายได้รับข้อมูลแล้ว และการเปลี่ยนทางควรจะกระทำโดยส่งข้อความ GET แยกออกไปต่างหาก (ตั้งแต่ HTTP/1.1)",
            statusCode: 303
        })
    },
    notModified: function (message, res) {
        return res.status(304).json({
            result: null,
            success: false,
            message: message,
            messageCode: "ทรัพยากรที่ร้องขอยังไม่มีการปรับปรุงเพิ่มเติมหลังจากการร้องขอครั้งล่าสุด โดยปกติแล้วเครื่องลูกข่ายเอชทีทีพีจะส่งส่วนหัว If-Modified-Since มาด้วยเพื่อให้เครื่องแม่ข่ายเปรียบเทียบเวลา การใช้ส่วนหัวนี้ให้เป็นประโยชน์ช่วยลดแบนด์วิดท์ และลดการประมวลผลซ้ำซ้อนทั้งทางฝั่งแม่ข่ายและลูกข่าย",
            statusCode: 304
        })
    },
    useProxy: function (message, res) {
        return res.status(305).json({
            result: null,
            success: false,
            message: message,
            messageCode: "แจ้งไปยังเครื่องลูกข่ายว่าควรใช้พร็อกซี ตัวแทนผู้ใช้หลายโปรแกรม อาทิเบราว์เซอร์ของมอซิลลา และอินเทอร์เน็ตเอกซ์พลอเรอร์ ยังดำเนินการกับรหัสตอบรับนี้ไม่ถูกต้อง ด้วยเหตุผลหลักในด้านความปลอดภัย (ตั้งแต่ HTTP/1.1)",
            statusCode: 305
        })
    },
    switchProxy: function (message, res) {
        return res.status(306).json({
            result: null,
            success: false,
            message: message,
            messageCode: "แจ้งไปยังเครื่องลูกข่ายว่าควรเปลี่ยนพร็อกซีที่ใช้ ปัจจุบันเลิกใช้งานแล้ว",
            statusCode: 306
        })
    },
    temporaryRedirect: function (message, res) {
        return res.status(307).json({
            result: null,
            success: false,
            message: message,
            messageCode: "ข้อความร้องขอที่ส่งเข้ามาในครั้งนี้ ควรจะส่งซ้ำไปยังตัวระบุแหล่งทรัพยากรสากลที่กำหนดให้ แต่ครั้งหน้าก็อาจสามารถส่งมายังที่เดิมได้ ต่างกับรหัส 303 ตรงที่ข้อความร้องขอจะไม่มีการเปลี่ยนแปลง นั่นคือข้อความร้องขอแบบ POST ควรจะเหมือนเดิม เพียงแค่ส่งไปยังแหล่งอื่นแทนเท่านั้น (ตั้งแต่ HTTP/1.1)",
            statusCode: 307
        })
    },
    badRequest: function (message, res) {
        return res.status(400).json({
            result: null,
            success: false,
            message: message,
            messageCode: "ข้อความร้องขอที่ส่งมามีความผิดพลาดทางไวยากรณ์ หรือไม่สามารถทำตามการร้องขอนั้นได้",
            statusCode: 400
        })
    },
    unauthorized: function (message, res) {
        return res.status(401).json({
            result: null,
            success: false,
            message: message,
            messageCode: "บอกไปยังเครื่องลูกข่ายว่าจำเป็นต้องทำการพิสูจน์ตัวตนก่อน คล้ายกับรหัส 403 Forbidden แต่ใช้เฉพาะเมื่อการพิสูจน์นั้นสามารถกระทำได้แต่กระบวนการล้มเหลว หรือยังไม่ได้เตรียมไว้ให้ ดูเพิ่มที่ การพิสูจน์ตัวจริงเพื่อเข้าถึงแบบพื้นฐาน (basic access authentication) และ การพิสูจน์ตัวจริงเพื่อเข้าถึงแบบย่อยข้อมูล (digest access authentication)",
            statusCode: 401
        })
    },
    paymentRequired: function (message, res) {
        return res.status(402).json({
            result: null,
            success: false,
            message: message,
            messageCode: "จำเป็นต้องเสียค่าเข้าชมก่อน ความตั้งใจของรหัสสถานภาพนี้คือเพื่อใช้เป็นส่วนหนึ่งของระบบเงินอิเล็กทรอนิกส์หรือระบบที่ต้องบริจาคเพื่อให้ได้มาซึ่งเนื้อหา แต่ก็ยังไม่เคยเกิดขึ้นมาก่อน และรหัสนี้ก็ไม่เคยได้นำมาใช้เลย",
            statusCode: 402
        })
    },
    forbidden: function (message, res) {
        return res.status(403).json({
            result: null,
            success: false,
            message: message,
            messageCode: "ข้อความร้องขอที่ส่งเข้ามาถูกต้อง แต่เครื่องแม่ข่ายปฏิเสธที่จะให้บริการ ในกรณีนี้การพิสูจน์ตัวตนไม่ได้ให้ผลที่แตกต่างจากเดิม",
            statusCode: 403
        })
    },
    notFound: function (message, res) {
        return res.status(404).json({
            result: null,
            success: false,
            message: message,
            messageCode: "ทรัพยากรที่ร้องขอไม่พบบนเครื่องแม่ข่าย แต่อาจสามารถกลับมามีได้ใหม่ในอนาคต การร้องขออื่น ๆ ที่ตามมายังสามารถดำเนินการได้ต่อไป",
            statusCode: 404
        })
    },
    methodNotAllowed: function (message, res) {
        return res.status(405).json({
            result: null,
            success: false,
            message: message,
            messageCode: "เครื่องลูกข่ายใช้คำสั่งที่ทรัพยากรนั้นไม่รองรับ ตัวอย่างเช่น การส่งข้อมูลจากแบบฟอร์มด้วยคำสั่ง GET แต่ทรัพยากรปลายทางจำเป็นต้องเสนอด้วยคำสั่ง PUT หรือการใช้ PUT บนทรัพยากรที่อ่านได้อย่างเดียว เป็นต้น",
            statusCode: 405
        })
    },
    notAcceptable: function (message, res) {
        return res.status(406).json({
            result: null,
            success: false,
            message: message,
            messageCode: "ทรัพยากรที่ร้องขอซึ่งสามารถสร้างขึ้นได้ แต่เครื่องแม่ข่ายไม่ยอมรับให้ทำเช่นนั้น เนื่องจากส่วนหัว Accept ที่ส่งมากับข้อความร้องขอไม่สัมพันธ์กัน",
            statusCode: 406
        })
    },
    proxyAuthenticationRequired: function (message, res) {
        return res.status(407).json({
            result: null,
            success: false,
            message: message,
            messageCode: "จำเป็นต้องมีการพิสูจน์ตัวจริงบนพร็อกซีก่อน",
            statusCode: 407
        })
    },
    requestTimeout: function (message, res) {
        return res.status(408).json({
            result: null,
            success: false,
            message: message,
            messageCode: "เครื่องให้บริการรอรับข้อความร้องขอจนหมดเวลา",
            statusCode: 408
        })
    },
    conflict: function (message, res) {
        return res.status(409).json({
            result: null,
            success: false,
            message: message,
            messageCode: "ใช้แสดงว่าการร้องขอนั้นไม่สามารถประมวลผลได้ เนื่องจากเกิดข้อขัดแย้งในข้อความร้องขอ เช่นการแก้ไขชนกัน",
            statusCode: 409
        })
    },
    gone: function (message, res) {
        return res.status(410).json({
            result: null,
            success: false,
            message: message,
            messageCode: "ทรัพยากรที่ร้องขอไม่มีอยู่ และจะไม่กลับมามีอีกต่อไป รหัสนี้ควรใช้เมื่อตั้งใจที่จะเอาทรัพยากรแหล่งหนึ่งออกไปอย่างถาวร อย่างไรก็ตามรหัสนี้ก็ไม่จำเป็นและสามารถใช้ 404 Not Found แทนได้ แต่ถ้าหากได้รับรหัส 410 เมื่อใด เครื่องลูกข่ายไม่ควรส่งการร้องขอทรัพยากรนั้นมาอีกในอนาคต เสิร์ชเอนจินควรลบทรัพยากรนี้ออกจากดัชนีเว็บไซต์",
            statusCode: 410
        })
    },
    lengthRequired: function (message, res) {
        return res.status(411).json({
            result: null,
            success: false,
            message: message,
            messageCode: "ข้อความร้องขอไม่ได้ระบุขนาดของเนื้อหามาในส่วนหัว ซึ่งเป็นสิ่งที่จำเป็นโดยทรัพยากรปลายทาง",
            statusCode: 411
        })
    },
    preconditionFailed: function (message, res) {
        return res.status(412).json({
            result: null,
            success: false,
            message: message,
            messageCode: "เครื่องแม่ข่ายไม่สามารถทำตามเงื่อนไขอย่างใดอย่างหนึ่งที่ให้ไว้โดยผู้ทำการร้องขอ",
            statusCode: 412
        })
    },
    requestEntityTooLarge: function (message, res) {
        return res.status(413).json({
            result: null,
            success: false,
            message: message,
            messageCode: "ทรัพยากรที่ร้องขอใหญ่เกินกว่าที่จะส่งด้วยโพรโทคอลปัจจุบันได้",
            statusCode: 413
        })
    },
    requestURITooLong: function (message, res) {
        return res.status(414).json({
            result: null,
            success: false,
            message: message,
            messageCode: "ตัวระบุแหล่งทรัพยากรสากลยาวเกินกว่าที่เครื่องให้บริการจะประมวลผล",
            statusCode: 414
        })
    },
    unsupportedMediaType: function (message, res) {
        return res.status(415).json({
            result: null,
            success: false,
            message: message,
            messageCode: "ข้อความร้องขอไม่ได้ระบุแบบชนิดสื่ออินเทอร์เน็ตที่เครื่องแม่ข่ายหรือทรัพยากรนั้นรองรับ ตัวอย่างเช่นเครื่องลูกข่ายระบุว่าทรัพยากรรูปภาพควรจะส่งให้มาเป็น image/svg+xml แต่เครื่องแม่ข่ายไม่สามารถหาชนิดของรูปภาพที่ต้องการ",
            statusCode: 415
        })
    },
    requestedRangeNotSatisfiable: function (message, res) {
        return res.status(416).json({
            result: null,
            success: false,
            message: message,
            messageCode: "เครื่องลูกข่ายร้องขอเนื้อหาบางส่วนของไฟล์ แต่เครื่องแม่ข่ายไม่สามารถจัดหาช่วงข้อมูลนั้นได้ เช่นในกรณีที่ตัวแทนผู้ใช้ร้องขอด้วยช่วงข้อมูลที่เกินกว่าขนาดของไฟล์",
            statusCode: 416
        })
    },
    expectationFailed: function (message, res) {
        return res.status(417).json({
            result: null,
            success: false,
            message: message,
            messageCode: "ส่วนหัว Expect ที่ส่งมาจากเครื่องลูกข่าย ยังไม่เพียงพอต่อความต้องการของเครื่องให้บริการ",
            statusCode: 417
        })
    },
    imATeapot: function (message, res) {
        return res.status(418).json({
            result: null,
            success: false,
            message: message,
            messageCode: 'แจ้งว่าเครื่องให้บริการเป็น "กาน้ำชา" เนื้อหาที่ได้รับอาจเป็น "short and stout" รหัสสถานภาพนี้กำหนดโดย ในวันเอพริลฟูลส์ ดูเพิ่มที่ Hyper Text Coffee Pot Control Protocol (HTCPCP)',
            statusCode: 418
        })
    },
    unprocessableEntity: function (message, res) {
        return res.status(422).json({
            result: null,
            success: false,
            message: message,
            messageCode: "ข้อความร้องขอถูกจัดรูปแบบไว้อย่างดีแล้ว แต่ไม่สามารถทำตามนั้นได้เนื่องจากการตีความผิดพลาด",
            statusCode: 422
        })
    },
    locked: function (message, res) {
        return res.status(423).json({
            result: null,
            success: false,
            message: message,
            messageCode: "ทรัพยากรที่กำลังจะเข้าถึงนั้นถูกล็อกอยู่",
            statusCode: 423
        })
    },
    failedDependency: function (message, res) {
        return res.status(424).json({
            result: null,
            success: false,
            message: message,
            messageCode: "การร้องขอล้มเหลว อันเนื่องจากความล้มเหลวของการร้องขอก่อนหน้า เช่นการใช้ PROPPATCH",
            statusCode: 424
        })
    },
    unorderedCollection: function (message, res) {
        return res.status(425).json({
            result: null,
            success: false,
            message: message,
            messageCode: 'ได้นิยามไว้ในร่างของ WebDAV Advanced Collections แต่ไม่ได้นำเสนอใน "Web Distributed Authoring and Versioning (WebDAV) Ordered Collections Protocol"',
            statusCode: 425
        })
    },
    upgradeRequired: function (message, res) {
        return res.status(426).json({
            result: null,
            success: false,
            message: message,
            messageCode: "เครื่องลูกข่ายควรเปลี่ยนไปใช้ TLS/1.0",
            statusCode: 426
        })
    },
    retryWith: function (message, res) {
        return res.status(449).json({
            result: null,
            success: false,
            message: message,
            messageCode: "การร้องขอควรจะลองใหม่อีกครั้งหลังจากมีการกระทำที่เหมาะสม เป็นส่วนขยายของไมโครซอฟท์",
            statusCode: 449
        })
    },
    internalServerError: function (message, res) {
        return res.status(500).json({
            result: null,
            success: false,
            message: message,
            messageCode: "ข้อความแสดงความผิดพลาดแบบทั่วไป ใช้เมื่อไม่มีข้อความเฉพาะที่เหมาะสมในการแจ้งสาเหตุ",
            statusCode: 500
        })
    },
    notImplemented: function (message, res) {
        return res.status(501).json({
            result: null,
            success: false,
            message: message,
            messageCode: "เครื่องให้บริการไม่เข้าใจคำสั่งร้องขอ หรือไม่ได้มีความสามารถให้ทำงานตามคำสั่งนั้น",
            statusCode: 501
        })
    },
    badGateway: function (message, res) {
        return res.status(502).json({
            result: null,
            success: false,
            message: message,
            messageCode: "เครื่องแม่ข่ายกำลังทำหน้าที่เป็นเกตเวย์หรือพร็อกซี และได้รับข้อความตอบรับที่ผิดพลาดจากเครื่องให้บริการเบื้องหลัง",
            statusCode: 502
        })
    },
    serviceUnavailable: function (message, res) {
        return res.status(503).json({
            result: null,
            success: false,
            message: message,
            messageCode: "เครื่องแม่ข่ายยังไม่ให้บริการในปัจจุบัน อันเนื่องจากการใช้งานเกินพิกัดหรืออยู่ในระหว่างการบำรุงรักษา โดยปกติแล้วสถานภาพนี้จะเป็นอยู่เพียงชั่วคราว",
            statusCode: 503
        })
    },
    gatewayTimeout: function (message, res) {
        return res.status(504).json({
            result: null,
            success: false,
            message: message,
            messageCode: "เครื่องแม่ข่ายกำลังทำหน้าที่เป็นเกตเวย์หรือพร็อกซี และไม่ได้รับข้อความตอบรับจากเครื่องให้บริการเบื้องหลัง ซึ่งรอรับข้อมูลจนกระทั่งหมดเวลา",
            statusCode: 504
        })
    },
    HTTPVersionNotSupported: function (message, res) {
        return res.status(505).json({
            result: null,
            success: false,
            message: message,
            messageCode: "เครื่องแม่ข่ายไม่รองรับรุ่นของเอชทีทีพีที่ใช้ในข้อความร้องขอ",
            statusCode: 505
        })
    },
    variantAlsoNegotiates: function (message, res) {
        return res.status(506).json({
            result: null,
            success: false,
            message: message,
            messageCode: "เครื่องแม่ข่ายกำลังทำหน้าที่เป็นเกตเวย์หรือพร็อกซี แต่การสื่อสารมีการเจรจาเชื่อมต่อระหว่างกลาง ทำให้การเชื่อมโยงไปไม่ถึงเครื่องให้บริการเบื้องหลัง ",
            statusCode: 506
        })
    },
    insufficientStorage: function (message, res) {
        return res.status(507).json({
            result: null,
            success: false,
            message: message,
            messageCode: "แหล่งเก็บข้อมูลบนเครื่องแม่ข่ายไม่พอเพียง",
            statusCode: 507
        })
    },
    bandwidthLimitExceeded: function (message, res) {
        return res.status(509).json({
            result: null,
            success: false,
            message: message,
            messageCode: "การใช้งานแบนด์วิดท์เกินกำหนด เป็นส่วนขยายของอะแพชี เว็บเซิร์ฟเวอร์ นิยมใช้อย่างแพร่หลายถึงแม้ว่าจะไม่ได้กำหนดในเอกสารขอความเห็น",
            statusCode: 509
        })
    },
    notExtended: function (message, res) {
        return res.status(510).json({
            result: null,
            success: false,
            message: message,
            messageCode: "จำเป็นต้องใช้ส่วนขยายเพิ่มเพื่อให้สามารถดำเนินงานตามการร้องขอนั้นได้ แต่ส่วนขยายนั้นไม่มีบนเครื่องแม่ข่าย",
            statusCode: 510
        })
    }
}