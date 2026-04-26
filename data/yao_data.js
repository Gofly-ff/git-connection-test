/**
 * 64卦360条爻辞完整数据
 * 格式：64卦 × 每卦6爻 = 384爻（实际有效约360条）
 * 数据来源：《周易》经典爻辞
 */

const yaoData = {
  // ==================== 乾卦（六爻皆阳）====================
  "乾_1": { position: 1, yaoCi: "潜龙勿用", description: "初九：潜龙勿用，阳在下也。" },
  "乾_2": { position: 2, yaoCi: "见龙在田，利见大人", description: "九二：见龙在田，德施普也。" },
  "乾_3": { position: 3, yaoCi: "君子终日乾乾，夕惕若厉，无咎", description: "九三：终日乾乾，反复道也。" },
  "乾_4": { position: 4, yaoCi: "或跃在渊，无咎", description: "九四：或跃在渊，进无咎也。" },
  "乾_5": { position: 5, yaoCi: "飞龙在天，利见大人", description: "九五：飞龙在天，大人造也。" },
  "乾_6": { position: 6, yaoCi: "亢龙有悔", description: "上九：亢龙有悔，盈不可久也。" },

  // ==================== 坤卦（六爻皆阴）====================
  "坤_1": { position: 1, yaoCi: "履霜，坚冰至", description: "初六：履霜坚冰，阴始凝也。" },
  "坤_2": { position: 2, yaoCi: "直方大，不习无不利", description: "六二：直方大，不习无不利，地道光也。" },
  "坤_3": { position: 3, yaoCi: "含章可贞，或从王事，无成有终", description: "六三：含章可贞，以时发也。" },
  "坤_4": { position: 4, yaoCi: "括囊，无咎无誉", description: "六四：括囊无咎，慎不害也。" },
  "坤_5": { position: 5, yaoCi: "黄裳，元吉", description: "六五：黄裳元吉，文在中也。" },
  "坤_6": { position: 6, yaoCi: "龙战于野，其血玄黄", description: "上六：龙战于野，其道穷也。" },

  // ==================== 屯卦（水雷屯）====================
  "屯_1": { position: 1, yaoCi: "磐桓，利居贞，利建侯", description: "初九：磐桓，利居贞，以正功也。" },
  "屯_2": { position: 2, yaoCi: "屯如邅如，乘马班如，匪寇婚媾", description: "六二：屯如邅如，乘马班如，正夫也。" },
  "屯_3": { position: 3, yaoCi: "即鹿无虞，惟入于林中，君子几不如舍，往吝", description: "六三：即鹿无虞，贪困也。" },
  "屯_4": { position: 4, yaoCi: "乘马班如，求婚媾，往吉，无不利", description: "六四：乘马班如，求婚媾，往有庆也。" },
  "屯_5": { position: 5, yaoCi: "屯其膏，小贞吉，大贞凶", description: "九五：屯其膏，施未光也。" },
  "屯_6": { position: 6, yaoCi: "乘马班如，泣血涟如", description: "上六：乘马班如，穷道穷也。" },

  // ==================== 蒙卦（山水蒙）====================
  "蒙_1": { position: 1, yaoCi: "发蒙，利用刑人，用说桎梏，以往吝", description: "初六：发蒙，利用刑人，以正法也。" },
  "蒙_2": { position: 2, yaoCi: "包蒙吉，纳妇吉，子克家", description: "九二：包蒙吉，纳妇吉也。" },
  "蒙_3": { position: 3, yaoCi: "勿用取女，见金夫，不有躬，无攸利", description: "六三：勿用取女，行不顺也。" },
  "蒙_4": { position: 4, yaoCi: "困蒙，吝", description: "六四：困蒙之吝，独远实也。" },
  "蒙_5": { position: 5, yaoCi: "童蒙，吉", description: "六五：童蒙之吉，顺以巽也。" },
  "蒙_6": { position: 6, yaoCi: "击蒙，不利为寇，利御寇", description: "上九：击蒙之利，治蒙之道也。" },

  // ==================== 需卦（水天需）====================
  "需_1": { position: 1, yaoCi: "需于郊，利用恒，无咎", description: "初九：需于郊，不犯难行也。" },
  "需_2": { position: 2, yaoCi: "需于沙，小有言，终吉", description: "九二：需于沙，宽以居之也。" },
  "需_3": { position: 3, yaoCi: "需于泥，致寇至", description: "九三：需于泥，灾在外也。" },
  "需_4": { position: 4, yaoCi: "需于血，出自穴", description: "六四：需于血，顺以听也。" },
  "需_5": { position: 5, yaoCi: "需于酒食，贞吉", description: "九五：酒食贞吉，以中正也。" },
  "需_6": { position: 6, yaoCi: "入于穴，有不速之客三人来，敬之终吉", description: "上六：不速之客来，顺相得也。" },

  // ==================== 讼卦（天水讼）====================
  "讼_1": { position: 1, yaoCi: "不永所事，小有言，终吉", description: "初六：不永所事，讼不可长也。" },
  "讼_2": { position: 2, yaoCi: "不克讼，归而逋，其邑人三百户，无眚", description: "九二：不克讼，逃逋也。" },
  "讼_3": { position: 3, yaoCi: "食旧德，贞厉，终吉，或从王事，无成", description: "六三：食旧德，从上吉也。" },
  "讼_4": { position: 4, yaoCi: "不克讼，复即命，渝安贞，吉", description: "九四：不克讼，渝安贞吉也。" },
  "讼_5": { position: 5, yaoCi: "讼，元吉", description: "九五：讼元吉，以中正也。" },
  "讼_6": { position: 6, yaoCi: "或锡之鞶带，终朝三褫之", description: "上九：以讼受服，亦不足敬也。" },

  // ==================== 师卦（地水师）====================
  "师_1": { position: 1, yaoCi: "师出以律，否臧凶", description: "初六：师出以律，失律凶也。" },
  "师_2": { position: 2, yaoCi: "在师中，吉，无咎，王三锡命", description: "九二：在师中吉，以中行也。" },
  "师_3": { position: 3, yaoCi: "师或舆尸，凶", description: "六三：师或舆尸，大无功也。" },
  "师_4": { position: 4, yaoCi: "师左次，无咎", description: "六四：左次无咎，未失常也。" },
  "师_5": { position: 5, yaoCi: "田有禽，利执言，无咎，长子帅师，弟子舆尸，贞凶", description: "九五：长子帅师，以中行也。" },
  "师_6": { position: 6, yaoCi: "大君有命，开国承家，小人勿用", description: "上六：大君有命，以正功也。" },

  // ==================== 比卦（水地比）====================
  "比_1": { position: 1, yaoCi: "有孚比之，无咎，有孚盈缶，终来有他吉", description: "初六：有孚比之，终来有他吉也。" },
  "比_2": { position: 2, yaoCi: "比之自内，贞吉", description: "六二：比之自内，不自失也。" },
  "比_3": { position: 3, yaoCi: "比之匪人", description: "六三：比之匪人，不亦伤乎。" },
  "比_4": { position: 4, yaoCi: "外比之，贞吉", description: "六四：外比于贤，以从上也。" },
  "比_5": { position: 5, yaoCi: "显比，王用三驱，失前禽，邑人不诫，吉", description: "九五：显比之吉，正中也。" },
  "比_6": { position: 6, yaoCi: "比之无首，凶", description: "上六：比之无首，无所终也。" },

  // ==================== 小畜卦（风天小畜）====================
  "小畜_1": { position: 1, yaoCi: "复自道，何其咎，吉", description: "初九：复自道，其义吉也。" },
  "小畜_2": { position: 2, yaoCi: "牵复，吉", description: "九二：牵复在中，亦不自失也。" },
  "小畜_3": { position: 3, yaoCi: "舆说辐，夫妻反目", description: "六三：夫妻反目，不能正室也。" },
  "小畜_4": { position: 4, yaoCi: "有孚，血去惕出，无咎", description: "九四：有孚惕出，上合志也。" },
  "小畜_5": { position: 5, yaoCi: "有孚挛如，富以其邻", description: "九五：有孚挛如，不独富也。" },
  "小畜_6": { position: 6, yaoCi: "既雨既处，尚德载，妇贞厉，月几望，君子征凶", description: "上九：既雨既处，德积载也。" },

  // ==================== 履卦（天泽履）====================
  "履_1": { position: 1, yaoCi: "素履，往无咎", description: "初九：素履之往，独行愿也。" },
  "履_2": { position: 2, yaoCi: "履道坦坦，幽人贞吉", description: "九二：幽人贞吉，中不自乱也。" },
  "履_3": { position: 3, yaoCi: "眇能视，跛能履，履虎尾，咥人，凶", description: "六三：眇能视，不足以有明也。" },
  "履_4": { position: 4, yaoCi: "履虎尾，愬愬，终吉", description: "九四：愬愬终吉，志行也。" },
  "履_5": { position: 5, yaoCi: "夬履，贞厉", description: "九五：夬履贞厉，位正当也。" },
  "履_6": { position: 6, yaoCi: "视履考祥，其旋元吉", description: "上九：元吉在上，大有庆也。" },

  // ==================== 泰卦（地天泰）====================
  "泰_1": { position: 1, yaoCi: "拔茅茹，以其汇，征吉", description: "初九：拔茅征吉，志在外也。" },
  "泰_2": { position: 2, yaoCi: "包荒，用冯河，不遐遗，朋亡，得尚于中行", description: "九二：包荒得尚于中行，以光大也。" },
  "泰_3": { position: 3, yaoCi: "无平不陂，无往不复，艰贞无咎，勿恤其孚，于食有福", description: "九三：无往不复，天地际也。" },
  "泰_4": { position: 4, yaoCi: "翩翩，不富以其邻，不戒以孚", description: "六四：翩翩不富，皆失实也。" },
  "泰_5": { position: 5, yaoCi: "帝乙归妹，以祉元吉", description: "六五：帝乙归妹，以祉元吉也。" },
  "泰_6": { position: 6, yaoCi: "城复于隍，勿用师，自邑告命，贞吝", description: "上六：城复于隍，其命乱也。" },

  // ==================== 否卦（天地否）====================
  "否_1": { position: 1, yaoCi: "拔茅茹，以其汇，贞吉亨", description: "初六：拔茅贞吉，志在君也。" },
  "否_2": { position: 2, yaoCi: "包承，小人吉，大人否亨", description: "六二：大人否亨，不乱群也。" },
  "否_3": { position: 3, yaoCi: "包羞", description: "六三：包羞，位不当也。" },
  "否_4": { position: 4, yaoCi: "有命无咎，畴离祉", description: "九四：有命无咎，志行也。" },
  "否_5": { position: 5, yaoCi: "休否，大人吉，其亡其亡，系于苞桑", description: "九五：大人之吉，位正当也。" },
  "否_6": { position: 6, yaoCi: "倾否，先否后喜", description: "上九：否终则倾，何可长也。" },

  // ==================== 同人卦（天火同人）====================
  "同人_1": { position: 1, yaoCi: "同人于门，无咎", description: "初九：出门同人，又谁咎也。" },
  "同人_2": { position: 2, yaoCi: "同人于宗，吝", description: "六二：同人于宗，吝道也。" },
  "同人_3": { position: 3, yaoCi: "伏戎于莽，升其高陵，三岁不兴", description: "九三：伏戎于莽，敌刚也。" },
  "同人_4": { position: 4, yaoCi: "乘其墉，弗克攻，吉", description: "九四：乘其墉，义弗克也。" },
  "同人_5": { position: 5, yaoCi: "同人先号咷而后笑，大师克相遇", description: "九五：同人之先，以中直也。" },
  "同人_6": { position: 6, yaoCi: "同人于郊，无悔", description: "上九：同人于郊，志未得也。" },

  // ==================== 大有卦（火天大有）====================
  "大有_1": { position: 1, yaoCi: "无交害，匪咎，艰则无咎", description: "初九：大有初九，无交害也。" },
  "大有_2": { position: 2, yaoCi: "大车以载，有攸往，无咎", description: "九二：大车以载，积中不败也。" },
  "大有_3": { position: 3, yaoCi: "公用亨于天子，小人弗克", description: "九三：公用亨于天子，小人害也。" },
  "大有_4": { position: 4, yaoCi: "匪其彭，无咎", description: "九四：匪其彭无咎，明辩晰也。" },
  "大有_5": { position: 5, yaoCi: "厥孚交如，威如，吉", description: "六五：厥孚交如，信以发志也。" },
  "大有_6": { position: 6, yaoCi: "吉，自天佑之", description: "上九：大有上吉，自天佑也。" },

  // ==================== 谦卦（地山谦）====================
  "谦_1": { position: 1, yaoCi: "谦谦君子，卑以自牧也", description: "初六：谦谦君子，卑以自牧也。" },
  "谦_2": { position: 2, yaoCi: "鸣谦贞吉，中心得也", description: "六二：鸣谦贞吉，中心得也。" },
  "谦_3": { position: 3, yaoCi: "劳谦君子，有终吉", description: "九三：劳谦君子，万民服也。" },
  "谦_4": { position: 4, yaoCi: "无不利，撝谦", description: "六四：无不利，撝谦，不违则也。" },
  "谦_5": { position: 5, yaoCi: "不富以其邻，利用侵伐，无不利", description: "六五：不富以其邻，利用侵伐，亦不足服也。" },
  "谦_6": { position: 6, yaoCi: "鸣谦，利用行师，征邑国", description: "上六：鸣谦，志未得也。" },

  // ==================== 豫卦（雷地豫）====================
  "豫_1": { position: 1, yaoCi: "鸣豫，凶", description: "初六：鸣豫，志穷凶也。" },
  "豫_2": { position: 2, yaoCi: "介于石，不终日，贞吉", description: "六二：六二贞吉，以中正也。" },
  "豫_3": { position: 3, yaoCi: "盱豫，悔，迟有悔", description: "六三：盱豫有悔，位不当也。" },
  "豫_4": { position: 4, yaoCi: "由豫，大有得，志大行也", description: "九四：由豫大有得，志大行也。" },
  "豫_5": { position: 5, yaoCi: "贞疾，恒不死", description: "六五：六五贞吉，乘刚也。" },
  "豫_6": { position: 6, yaoCi: "冥豫，成有渝，无咎", description: "上六：冥豫在上，何可长也。" },

  // ==================== 随卦（泽雷随）====================
  "随_1": { position: 1, yaoCi: "官有渝，贞吉，出门交有功", description: "初九：官有渝，从正吉也。" },
  "随_2": { position: 2, yaoCi: "系小子，失丈夫", description: "六二：系小子，弗兼与也。" },
  "随_3": { position: 3, yaoCi: "系丈夫，失小子，随有求得，利居贞", description: "六三：系丈夫，志舍下也。" },
  "随_4": { position: 4, yaoCi: "随有获，贞凶，有孚在道，以明，何咎", description: "九四：随有获，其义凶也。" },
  "随_5": { position: 5, yaoCi: "孚于嘉，吉", description: "九五：孚于嘉吉，位正中也。" },
  "随_6": { position: 6, yaoCi: "拘系之，乃从维之，王用亨于西山", description: "上六：拘系之，上穷也。" },

  // ==================== 蛊卦（山风蛊）====================
  "蛊_1": { position: 1, yaoCi: "干父之蛊，有子，考无咎，厉终吉", description: "初六：干父之蛊，意承考也。" },
  "蛊_2": { position: 2, yaoCi: "干母之蛊，不可贞", description: "九二：干母之蛊，得中道也。" },
  "蛊_3": { position: 3, yaoCi: "干父之蛊，小有悔，无大咎", description: "六三：干父之蛊，终无咎也。" },
  "蛊_4": { position: 4, yaoCi: "裕父之蛊，往见吝", description: "六四：裕父之蛊，往未得也。" },
  "蛊_5": { position: 5, yaoCi: "干父之蛊，用誉", description: "六五：干父之蛊承以德也。" },
  "蛊_6": { position: 6, yaoCi: "不事王侯，高尚其事", description: "上九：不事王侯，志可则也。" },

  // ==================== 临卦（地泽临）====================
  "临_1": { position: 1, yaoCi: "咸临，贞吉", description: "初九：咸临贞吉，志行正也。" },
  "临_2": { position: 2, yaoCi: "咸临，吉无不利", description: "九二：咸临吉无不利，未顺命也。" },
  "临_3": { position: 3, yaoCi: "甘临，无攸利，既忧之，无咎", description: "六三：甘临，位不当也。" },
  "临_4": { position: 4, yaoCi: "至临，无咎", description: "六四：至临无咎，位当也。" },
  "临_5": { position: 5, yaoCi: "知临，大君之宜，吉", description: "六五：知临大君之宜，行中之谓也。" },
  "临_6": { position: 6, yaoCi: "敦临，吉，无咎", description: "上六：敦临之吉，志在内也。" },

  // ==================== 观卦（风地观）====================
  "观_1": { position: 1, yaoCi: "童观，小人无咎，君子吝", description: "初六：初六童观，小人道也。" },
  "观_2": { position: 2, yaoCi: "闚观，利女贞", description: "六二：闚观女贞，亦可丑也。" },
  "观_3": { position: 3, yaoCi: "观我生，进退", description: "六三：观我生，进退未失也。" },
  "观_4": { position: 4, yaoCi: "观国之光，利用宾于王", description: "六四：观国之光，尚宾也。" },
  "观_5": { position: 5, yaoCi: "观我生，君子无咎", description: "九五：观我生，观民也。" },
  "观_6": { position: 6, yaoCi: "观其生，君子无咎", description: "上九：观其生，志未平也。" },

  // ==================== 噬嗑卦（火雷噬嗑）====================
  "噬嗑_1": { position: 1, yaoCi: "屦校灭趾，无咎", description: "初九：屦校灭趾，不行也。" },
  "噬嗑_2": { position: 2, yaoCi: "噬肤灭鼻，无咎", description: "六二：噬肤灭鼻，乘刚也。" },
  "噬嗑_3": { position: 3, yaoCi: "噬腊肉，遇毒，小吝，无咎", description: "六三：遇毒，位不当也。" },
  "噬嗑_4": { position: 4, yaoCi: "噬干胏，得金矢，利艰贞，吉", description: "九四：利艰贞吉，未光也。" },
  "噬嗑_5": { position: 5, yaoCi: "噬干肉，得黄金，贞厉，无咎", description: "六五：贞厉无咎，得当也。" },
  "噬嗑_6": { position: 6, yaoCi: "何校灭耳，凶", description: "上九：何校灭耳，聪不明也。" },

  // ==================== 贲卦（山火贲）====================
  "贲_1": { position: 1, yaoCi: "贲其趾，舍车而徒", description: "初九：舍车而徒，义弗乘也。" },
  "贲_2": { position: 2, yaoCi: "贲其须", description: "六二：贲其须，与上兴也。" },
  "贲_3": { position: 3, yaoCi: "贲如濡如，永贞吉", description: "九三：永贞之吉，终莫之陵也。" },
  "贲_4": { position: 4, yaoCi: "贲如皤如，白马翰如，匪寇婚媾", description: "六四：六四当位，疑也。" },
  "贲_5": { position: 5, yaoCi: "丘园，束帛戋戋，吝，终吉", description: "六五：六五之吉，有喜也。" },
  "贲_6": { position: 6, yaoCi: "白贲，无咎", description: "上九：白贲无咎，上得志也。" },

  // ==================== 剥卦（山地剥）====================
  "剥_1": { position: 1, yaoCi: "剥床以足，蔑贞凶", description: "初六：剥床以足，以灭下也。" },
  "剥_2": { position: 2, yaoCi: "剥床以辨，蔑贞凶", description: "六二：剥床以辨，未有与也。" },
  "剥_3": { position: 3, yaoCi: "剥之，无咎", description: "六三：剥之无咎，失上下也。" },
  "剥_4": { position: 4, yaoCi: "剥床以肤，凶", description: "六四：剥床以肤，切近灾也。" },
  "剥_5": { position: 5, yaoCi: "贯鱼以宫人宠，无不利", description: "六五：贯鱼以宫人宠，终无尤也。" },
  "剥_6": { position: 6, yaoCi: "硕果不食，君子得舆，小人剥庐", description: "上九：硕果不食，君子得舆，民所载也。" },

  // ==================== 复卦（地雷复）====================
  "复_1": { position: 1, yaoCi: "不远复，无祗悔，元吉", description: "初九：不远之复，以修身也。" },
  "复_2": { position: 2, yaoCi: "休复，吉", description: "六二：休复之吉，以下仁也。" },
  "复_3": { position: 3, yaoCi: "频复，厉无咎", description: "六三：频复之厉，义无咎也。" },
  "复_4": { position: 4, yaoCi: "中行独复", description: "六四：中行独复，以从道也。" },
  "复_5": { position: 5, yaoCi: "敦复，无悔", description: "六五：敦复无悔，中以自考也。" },
  "复_6": { position: 6, yaoCi: "迷复，凶，有灾眚，用行师，终有大败，以其国君凶，至于十年不克征", description: "上六：迷复之凶，反君道也。" },

  // ==================== 无妄卦（天雷无妄）====================
  "无妄_1": { position: 1, yaoCi: "无妄，往吉", description: "初九：无妄之往，得志也。" },
  "无妄_2": { position: 2, yaoCi: "不耕获，不菑畲，则利用攸往", description: "六二：不耕获，未富也。" },
  "无妄_3": { position: 3, yaoCi: "无妄之灾，或系之牛，行人之得，邑人之灾", description: "九三：无妄之灾，可贞厉也。" },
  "无妄_4": { position: 4, yaoCi: "可贞，无咎", description: "九四：无妄之咎，行有眚也。" },
  "无妄_5": { position: 5, yaoCi: "无妄之疾，勿药有喜", description: "九五：无妄之药，不可试也。" },
  "无妄_6": { position: 6, yaoCi: "无妄行有眚，无攸利", description: "上九：无妄行有眚，穷之灾也。" },

  // ==================== 大畜卦（山天大畜）====================
  "大畜_1": { position: 1, yaoCi: "有厉利已", description: "初九：有厉利已，不犯灾也。" },
  "大畜_2": { position: 2, yaoCi: "舆说輹", description: "九二：舆说輹，中无尤也。" },
  "大畜_3": { position: 3, yaoCi: "良马逐，利艰贞，日闲舆卫，利有攸往", description: "九三：良马逐，道传功大也。" },
  "大畜_4": { position: 4, yaoCi: "童牛之牿，元吉", description: "六四：童牛之牿，元吉，上合志也。" },
  "大畜_5": { position: 5, yaoCi: "豮豕之牙，吉", description: "六五：六五之吉，有庆也。" },
  "大畜_6": { position: 6, yaoCi: "何天之衢，亨", description: "上九：何天之衢，道大行也。" },

  // ==================== 颐卦（山雷颐）====================
  "颐_1": { position: 1, yaoCi: "舍尔灵龟，观我朵颐，凶", description: "初九：舍尔灵龟，观我朵颐，凶，养正则凶也。" },
  "颐_2": { position: 2, yaoCi: "颠颐拂经于丘颐，征凶", description: "六二：六二征凶，行失类也。" },
  "颐_3": { position: 3, yaoCi: "拂颐，贞凶，十年勿用，无攸利", description: "六三：十年勿用，道大悖也。" },
  "颐_4": { position: 4, yaoCi: "颠颐，吉，虎视眈眈，其欲逐逐，无咎", description: "六四：颠颐之吉，上施光也。" },
  "颐_5": { position: 5, yaoCi: "拂经，居贞吉，不可涉大川", description: "六五：居贞之吉，顺以从上也。" },
  "颐_6": { position: 6, yaoCi: "由颐，厉吉，大有庆", description: "上九：由颐厉吉，大有庆也。" },

  // ==================== 大过卦（泽风大过）====================
  "大过_1": { position: 1, yaoCi: "藉用白茅，无咎", description: "初六：藉用白茅，柔在下也。" },
  "大过_2": { position: 2, yaoCi: "枯杨生稊，老夫得其女妻，无不利", description: "九二：老夫女妻，过以相与也。" },
  "大过_3": { position: 3, yaoCi: "栋桡，凶", description: "九三：栋桡之凶，不可以有辅也。" },
  "大过_4": { position: 4, yaoCi: "栋隆，吉，它不桡", description: "九四：栋隆之吉，不桡乎下也。" },
  "大过_5": { position: 5, yaoCi: "枯杨生华，老妇得其士夫，无咎无誉", description: "九五：枯杨生华，何可久也。" },
  "大过_6": { position: 6, yaoCi: "过涉灭顶，凶，无咎", description: "上六：过涉之凶，不可咎也。" },

  // ==================== 坎卦（坎为水）====================
  "坎_1": { position: 1, yaoCi: "习坎，入于坎窞，凶", description: "初六：习坎入坎，失道凶也。" },
  "坎_2": { position: 2, yaoCi: "坎有险，求小得", description: "九二：求小得，未出中也。" },
  "坎_3": { position: 3, yaoCi: "来之坎坎，险且枕，入于坎窞，勿用", description: "六三：来之坎坎，终无功也。" },
  "坎_4": { position: 4, yaoCi: "樽酒簋贰，用缶，纳约自牖，终无咎", description: "六四：樽酒簋贰，刚柔际也。" },
  "坎_5": { position: 5, yaoCi: "坎不盈，祗既平，无咎", description: "九五：坎不盈，中未大也。" },
  "坎_6": { position: 6, yaoCi: "系用徽纆，寘于丛棘，三岁不得，凶", description: "上六：上六失道，凶三岁也。" },

  // ==================== 离卦（离为火）====================
  "离_1": { position: 1, yaoCi: "履错然，敬之，无咎", description: "初九：履错之敬，以辟咎也。" },
  "离_2": { position: 2, yaoCi: "黄离，元吉", description: "六二：黄离元吉，得中道也。" },
  "离_3": { position: 3, yaoCi: "日昃之离，不鼓缶而歌，则大耋之嗟，凶", description: "九三：日昃之离，何可久也。" },
  "离_4": { position: 4, yaoCi: "突如其来如，焚如，死如，弃如", description: "九四：突如其来如，无所容也。" },
  "离_5": { position: 5, yaoCi: "出涕沱若，戚嗟若，吉", description: "六五：六五之吉，离王公也。" },
  "离_6": { position: 6, yaoCi: "王用出征，有嘉折首，获匪其丑，无咎", description: "上九：王用出征，有嘉之功也。" },

  // ==================== 咸卦（泽山咸）====================
  "咸_1": { position: 1, yaoCi: "咸其拇", description: "初六：咸其拇，志在外也。" },
  "咸_2": { position: 2, yaoCi: "咸其腓，凶，居吉", description: "六二：咸其腓，志在随人，执下也。" },
  "咸_3": { position: 3, yaoCi: "咸其股，执其随，往吝", description: "九三：咸其股，志在随人，所执下也。" },
  "咸_4": { position: 4, yaoCi: "贞吉悔亡，憧憧往来，朋从尔思", description: "九四：贞吉悔亡，志在下也。" },
  "咸_5": { position: 5, yaoCi: "咸其脢，无悔", description: "九五：咸其脢，志末也。" },
  "咸_6": { position: 6, yaoCi: "咸其辅颊舌", description: "上六：咸其辅颊舌，滕口说也。" },

  // ==================== 恒卦（雷风恒）====================
  "恒_1": { position: 1, yaoCi: "浚恒，贞凶，无攸利", description: "初六：浚恒之凶，始求深也。" },
  "恒_2": { position: 2, yaoCi: "悔亡", description: "九二：九二悔亡，能久中也。" },
  "恒_3": { position: 3, yaoCi: "不恒其德，或承之羞，贞吝", description: "九三：不恒其德，无所容也。" },
  "恒_4": { position: 4, yaoCi: "田无禽", description: "六四：田无禽，久居其所也。" },
  "恒_5": { position: 5, yaoCi: "恒其德，贞，妇人吉，夫子凶", description: "六五：妇人贞吉，从一而终也。" },
  "恒_6": { position: 6, yaoCi: "振恒，凶", description: "上六：振恒在上，大无功也。" },

  // ==================== 遁卦（天山遁）====================
  "遁_1": { position: 1, yaoCi: "遁尾，厉，勿用有攸往", description: "初六：遁尾之厉，不往何灾也。" },
  "遁_2": { position: 2, yaoCi: "执之用黄牛之革，莫之胜说", description: "六二：执用黄牛，固志也。" },
  "遁_3": { position: 3, yaoCi: "系遁，有疾厉，畜臣妾，吉", description: "九三：系遁之厉，有疾惫也。" },
  "遁_4": { position: 4, yaoCi: "好遁，君子吉，小人否", description: "九四：君子好遁，小人否也。" },
  "遁_5": { position: 5, yaoCi: "嘉遁，贞吉", description: "九五：嘉遁贞吉，以正志也。" },
  "遁_6": { position: 6, yaoCi: "肥遁，无不利", description: "上九：肥遁无不利，无所疑也。" },

  // ==================== 大壮卦（雷天大壮）====================
  "大壮_1": { position: 1, yaoCi: "壮于趾，征凶，有孚", description: "初九：壮于趾，其孚穷也。" },
  "大壮_2": { position: 2, yaoCi: "贞吉", description: "九二：九二贞吉，以中也。" },
  "大壮_3": { position: 3, yaoCi: "小人用壮，君子用罔，贞厉，羝羊触藩，羸其角", description: "九三：小人用壮，君子罔也。" },
  "大壮_4": { position: 4, yaoCi: "贞吉悔亡，藩决不羸，壮于大舆之輹", description: "九四：藩决不羸，尚往也。" },
  "大壮_5": { position: 5, yaoCi: "丧羊于易，无悔", description: "六五：丧羊于易，位不当也。" },
  "大壮_6": { position: 6, yaoCi: "羝羊触藩，不能退，不能遂，无攸利，艰则吉", description: "上六：不能退，不能遂，不祥也。" },

  // ==================== 晋卦（火地晋）====================
  "晋_1": { position: 1, yaoCi: "晋如摧如，贞吉，罔孚，裕无咎", description: "初六：晋如摧如，独行正也。" },
  "晋_2": { position: 2, yaoCi: "晋如愁如，贞吉，受兹介福，于其王母", description: "六二：六二吉，愁如以中正也。" },
  "晋_3": { position: 3, yaoCi: "众允，悔亡", description: "六三：众允之志，上行也。" },
  "晋_4": { position: 4, yaoCi: "晋如硕鼠，贞厉", description: "九四：硕鼠贞厉，位不当也。" },
  "晋_5": { position: 5, yaoCi: "悔亡，失得勿恤，往吉，无不利", description: "六五：六五悔亡，无所疑也。" },
  "晋_6": { position: 6, yaoCi: "晋其角，维用伐邑，厉吉无咎，贞吝", description: "上九：维用伐邑，道未光也。" },

  // ==================== 明夷卦（地火明夷）====================
  "明夷_1": { position: 1, yaoCi: "明夷于飞，垂其翼，君子于行，三日不食，有攸往，主人有言", description: "初九：君子于行，义不食也。" },
  "明夷_2": { position: 2, yaoCi: "明夷，夷于左股，用拯马壮，吉", description: "六二：六二之吉，顺以则也。" },
  "明夷_3": { position: 3, yaoCi: "明夷于南狩，得其大首，不可疾贞", description: "九三：南狩之志，乃得大也。" },
  "明夷_4": { position: 4, yaoCi: "入于左腹，获明夷之心，于出门庭", description: "六四：入于左腹，获心意也。" },
  "明夷_5": { position: 5, yaoCi: "箕子之明夷，利贞", description: "六五：箕子之贞，明不可息也。" },
  "明夷_6": { position: 6, yaoCi: "不明晦，初登于天，后入于地", description: "上六：初登于天，照四国也。" },

  // ==================== 家人卦（风火家人）====================
  "家人_1": { position: 1, yaoCi: "闲有家，悔亡", description: "初九：闲有家，志未变也。" },
  "家人_2": { position: 2, yaoCi: "无攸遂，在中馈，贞吉", description: "六二：无攸遂，在中馈，贞吉也。" },
  "家人_3": { position: 3, yaoCi: "家人嗃嗃，悔厉吉，妇子嘻嘻，终吝", description: "九三：家人嗃嗃，未失也。" },
  "家人_4": { position: 4, yaoCi: "富家，大吉", description: "六四：富家大吉，顺在位也。" },
  "家人_5": { position: 5, yaoCi: "王假有家，勿恤，吉", description: "九五：王假有家，交相爱也。" },
  "家人_6": { position: 6, yaoCi: "有孚威如，终吉", description: "上九：有孚威如，终吉，反身之谓也。" },

  // ==================== 睽卦（火泽睽）====================
  "睽_1": { position: 1, yaoCi: "见恶人，无咎", description: "初九：见恶人，以辟咎也。" },
  "睽_2": { position: 2, yaoCi: "遇主于巷，无咎", description: "六二：遇主于巷，未失道也。" },
  "睽_3": { position: 3, yaoCi: "见舆曳，其牛掣，其人天且劓，无初有终", description: "九三：见舆曳，位不当也。" },
  "睽_4": { position: 4, yaoCi: "睽孤，遇元夫，交孚，厉无咎", description: "九四：交孚无咎，志行也。" },
  "睽_5": { position: 5, yaoCi: "悔亡，厥宗噬肤，往何咎", description: "六五：厥宗噬肤，往有庆也。" },
  "睽_6": { position: 6, yaoCi: "睽孤，见豕负涂，载鬼一车，先张之弧，后说之弧，匪寇婚媾，往遇雨则吉", description: "上九：遇雨之吉，群疑亡也。" },

  // ==================== 蹇卦（水山蹇）====================
  "蹇_1": { position: 1, yaoCi: "往蹇来誉", description: "初六：往蹇来誉，宜待也。" },
  "蹇_2": { position: 2, yaoCi: "王臣蹇蹇，匪躬之故", description: "六二：王臣蹇蹇，终无尤也。" },
  "蹇_3": { position: 3, yaoCi: "往蹇来反", description: "九三：往蹇来反，内喜之也。" },
  "蹇_4": { position: 4, yaoCi: "往蹇来连", description: "六四：往蹇来连，当位实也。" },
  "蹇_5": { position: 5, yaoCi: "大蹇朋来", description: "九五：大蹇朋来，以中节也。" },
  "蹇_6": { position: 6, yaoCi: "往蹇来硕，吉，利见大人", description: "上六：往蹇来硕，志在内也。" },

  // ==================== 解卦（雷水解）====================
  "解_1": { position: 1, yaoCi: "无咎", description: "初六：无咎者，善补过也。" },
  "解_2": { position: 2, yaoCi: "田获三狐，得黄矢，贞吉", description: "九二：九二贞吉，得中道也。" },
  "解_3": { position: 3, yaoCi: "负且乘，致寇至，贞吝", description: "六三：负且乘，义不处也。" },
  "解_4": { position: 4, yaoCi: "解而拇，朋至斯孚", description: "九四：解而拇，未光也。" },
  "解_5": { position: 5, yaoCi: "君子维有解，吉，有孚于小人", description: "六五：君子有解，小人退也。" },
  "解_6": { position: 6, yaoCi: "公用射隼于高墉之上，获之，无不利", description: "上六：公用射隼，以解悖也。" },

  // ==================== 损卦（山泽损）====================
  "损_1": { position: 1, yaoCi: "己事遄往，无咎，酌损之", description: "初九：己事遄往，尚合志也。" },
  "损_2": { position: 2, yaoCi: "利贞，征凶，损其益，使损益变", description: "九二：九二利贞，中以为志也。" },
  "损_3": { position: 3, yaoCi: "三人行则损一人，一人行则得其友", description: "六三：一人行，三则疑也。" },
  "损_4": { position: 4, yaoCi: "损其疾，使遄有喜，无咎", description: "六四：损其疾，亦可喜也。" },
  "损_5": { position: 5, yaoCi: "或益之十朋之龟，弗克违，元吉", description: "六五：六五元吉，自上祐也。" },
  "损_6": { position: 6, yaoCi: "弗损益之，无咎，贞吉，利有攸往，得臣无家", description: "上九：弗损益之，大得志也。" },

  // ==================== 益卦（风雷益）====================
  "益_1": { position: 1, yaoCi: "利用为大作，元吉，无咎", description: "初九：元吉无咎，下不厚事也。" },
  "益_2": { position: 2, yaoCi: "或益之十朋之龟，弗克违，永贞吉，王用享于帝，吉", description: "六二：六二永贞，用享帝吉也。" },
  "益_3": { position: 3, yaoCi: "益之用凶事，无咎，有孚中行，告公用圭", description: "六三：益之用凶事，固有之也。" },
  "益_4": { position: 4, yaoCi: "中行告公从，利用为依迁国", description: "六四：告公从，以益志也。" },
  "益_5": { position: 5, yaoCi: "有孚惠心，勿问元吉，有孚惠我德", description: "九五：有孚惠心，勿问之矣。" },
  "益_6": { position: 6, yaoCi: "莫益之，或击之，立心勿恒，凶", description: "上九：莫益之，偏辞也。" },

  // ==================== 夬卦（泽天夬）====================
  "夬_1": { position: 1, yaoCi: "壮于前趾，往不胜为咎", description: "初九：不胜而往，咎也。" },
  "夬_2": { position: 2, yaoCi: "惕号，莫夜有戎，勿恤", description: "九二：九二有戎，恤可保也。" },
  "夬_3": { position: 3, yaoCi: "壮于頄，有凶，君子夬夬，独行遇雨，若濡有愠，无咎", description: "九三：壮于頄，凶在nal也。" },
  "夬_4": { position: 4, yaoCi: "臀无肤，其行次且，牵羊悔亡，闻言不信", description: "九四：其行次且，位不当也。" },
  "夬_5": { position: 5, yaoCi: "苋陆夬夬，中行无咎", description: "九五：苋陆夬夬，中未光也。" },
  "夬_6": { position: 6, yaoCi: "无号，终有凶", description: "上六：无号之凶，终不可长也。" },

  // ==================== 姤卦（天风姤）====================
  "姤_1": { position: 1, yaoCi: "系于金柅，贞吉，有攸往，见凶，羸豕孚蹢躅", description: "初六：系于金柅，柔道牵也。" },
  "姤_2": { position: 2, yaoCi: "包有鱼，无咎，不利宾", description: "九二：包有鱼，义不及宾也。" },
  "姤_3": { position: 3, yaoCi: "臀无肤，其行次且，厉，无大咎", description: "九三：其行次且，行未牵也。" },
  "姤_4": { position: 4, yaoCi: "包无鱼，起凶", description: "九四：包无鱼，远民也。" },
  "姤_5": { position: 5, yaoCi: "以杞包瓜，含章，有陨自天", description: "九五：九五含章，中正也。" },
  "姤_6": { position: 6, yaoCi: "姤其角，吝，无咎", description: "上九：姤其角，上穷吝也。" },

  // ==================== 萃卦（泽地萃）====================
  "萃_1": { position: 1, yaoCi: "萃有位，无咎，匪孚，元永贞，悔亡", description: "初六：有位无咎，匪孚元永贞也。" },
  "萃_2": { position: 2, yaoCi: "引吉，无咎，孚乃利用禴", description: "六二：六二引吉，申命也。" },
  "萃_3": { position: 3, yaoCi: "萃如嗟如，无攸利，往无咎，小吝", description: "六三：往无咎，上巽也。" },
  "萃_4": { position: 4, yaoCi: "大吉，无咎", description: "九四：大吉无咎，位不当也。" },
  "萃_5": { position: 5, yaoCi: "萃有位，悔亡，赍咨涕洟，无咎", description: "九五：九五萃有位，志未光也。" },
  "萃_6": { position: 6, yaoCi: "赍咨涕洟，无咎", description: "上六：赍咨涕洟，未安上也。" },

  // ==================== 升卦（地风升）====================
  "升_1": { position: 1, yaoCi: "允升，大吉", description: "初六：允升大吉，上合志也。" },
  "升_2": { position: 2, yaoCi: "孚乃利用禴，无咎", description: "九二：九二乃利用禴，承无咎也。" },
  "升_3": { position: 3, yaoCi: "升虚邑", description: "九三：升虚邑，无所疑也。" },
  "升_4": { position: 4, yaoCi: "王用亨于岐山，吉，无咎", description: "六四：王用亨于岐山，顺事也。" },
  "升_5": { position: 5, yaoCi: "贞吉，升阶", description: "六五：贞吉升阶，大得志也。" },
  "升_6": { position: 6, yaoCi: "冥升，利于不息之贞", description: "上六：冥升在上，消不富也。" },

  // ==================== 困卦（泽水困）====================
  "困_1": { position: 1, yaoCi: "臀困于株木，入于幽谷，三岁不觌，凶", description: "初六：入于幽谷，幽不明也。" },
  "困_2": { position: 2, yaoCi: "困于酒食，朱绂方来，利用享祀，征凶，无咎", description: "九二：困于酒食，中有庆也。" },
  "困_3": { position: 3, yaoCi: "困于石，据于蒺藜，入于其宫，不见其妻，凶", description: "六三：据于蒺藜，乘刚也。" },
  "困_4": { position: 4, yaoCi: "来徐徐，困于金车，吝，有终", description: "九四：来徐徐，志在下也。" },
  "困_5": { position: 5, yaoCi: "劓刖，困于赤绂，乃徐有说，利用祭祀", description: "九五：劓刖，志未得也。" },
  "困_6": { position: 6, yaoCi: "困于葛藟，于臲倪，曰动悔有悔，征吉", description: "上六：困于葛藟，未当也。" },

  // ==================== 井卦（水风井）====================
  "井_1": { position: 1, yaoCi: "井泥不食，旧井无禽", description: "初六：井泥不食，下也。" },
  "井_2": { position: 2, yaoCi: "井谷射鲋，瓮敝漏", description: "九二：井谷射鲋，无与也。" },
  "井_3": { position: 3, yaoCi: "井渫不食，为我心恻，可用汲，王明，并受其福", description: "九三：井渫不食，行恻也。" },
  "井_4": { position: 4, yaoCi: "井甃，无咎", description: "六四：井甃无咎，修井也。" },
  "井_5": { position: 5, yaoCi: "井冽，寒泉食", description: "九五：寒泉之食，中正也。" },
  "井_6": { position: 6, yaoCi: "井收勿幕，有孚元吉", description: "上六：元吉在上，大成也。" },

  // ==================== 革卦（泽火革）====================
  "革_1": { position: 1, yaoCi: "巩用黄牛之革", description: "初九：巩用黄牛，不可以有为也。" },
  "革_2": { position: 2, yaoCi: "己日乃革之，征吉，无咎", description: "六二：六二之吉，顺以中正也。" },
  "革_3": { position: 3, yaoCi: "征凶，贞厉，革言三就，有孚", description: "九三：九三之吉，患之所以也。" },
  "革_4": { position: 4, yaoCi: "悔亡，有孚改命，吉", description: "九四：九四悔亡，有孚改命也。" },
  "革_5": { position: 5, yaoCi: "大人虎变，未占有孚", description: "九五：大人虎变，其文炳也。" },
  "革_6": { position: 6, yaoCi: "君子豹变，小人革面，征凶，居贞吉", description: "上六：君子豹变，其文蔚也。" },

  // ==================== 鼎卦（火风鼎）====================
  "鼎_1": { position: 1, yaoCi: "鼎颠趾，利出否，得妾以其子，无咎", description: "初六：鼎颠趾，未悖也。" },
  "鼎_2": { position: 2, yaoCi: "鼎有实，我仇有疾，不我能即，吉", description: "九二：鼎有实，慎所之也。" },
  "鼎_3": { position: 3, yaoCi: "鼎耳革，其行塞，雉膏不食，方雨亏悔，终吉", description: "九三：鼎耳革，失其义也。" },
  "鼎_4": { position: 4, yaoCi: "鼎折足，覆公餗，其形渥，凶", description: "九四：覆公餗，信如何也。" },
  "鼎_5": { position: 5, yaoCi: "鼎黄耳，利贞", description: "六五：鼎黄耳，中以为实也。" },
  "鼎_6": { position: 6, yaoCi: "鼎玉铉，大吉，无不利", description: "上九：玉铉在上，刚柔节也。" },

  // ==================== 震卦（震为雷）====================
  "震_1": { position: 1, yaoCi: "震来虩虩，后笑言哑哑，吉", description: "初九：震来虩虩，恐致福也。" },
  "震_2": { position: 2, yaoCi: "震来厉，亿丧贝，跻于九陵，勿逐，七日得", description: "六二：震来厉，乘刚也。" },
  "震_3": { position: 3, yaoCi: "震苏苏，震行无眚", description: "九三：震苏苏，位不当也。" },
  "震_4": { position: 4, yaoCi: "震遂泥", description: "六四：震遂泥，未光也。" },
  "震_5": { position: 5, yaoCi: "震往来厉，亿无丧有事", description: "六五：震往来厉，危行也。" },
  "震_6": { position: 6, yaoCi: "震索索，视矍矍，征凶，震不于其躬，于其邻，无咎，婚媾有言", description: "上六：震索索，中未得也。" },

  // ==================== 艮卦（艮为山）====================
  "艮_1": { position: 1, yaoCi: "艮其趾，无咎，利永贞", description: "初六：艮其趾，未失正也。" },
  "艮_2": { position: 2, yaoCi: "艮其腓，不拯其随，其心不快", description: "六二：六二之吉，未失正也。" },
  "艮_3": { position: 3, yaoCi: "艮其限，列其夤，厉，熏心", description: "九三：艮其限，危熏心也。" },
  "艮_4": { position: 4, yaoCi: "艮其身，无咎", description: "六四：艮其身，止诸躬也。" },
  "艮_5": { position: 5, yaoCi: "艮其辅，言有序，悔亡", description: "六五：艮其辅，以中正也。" },
  "艮_6": { position: 6, yaoCi: "敦艮，吉", description: "上九：敦艮之吉，以厚终也。" },

  // ==================== 渐卦（风山渐）====================
  "渐_1": { position: 1, yaoCi: "鸿渐于干，小子厉，有言，无咎", description: "初六：小子之厉，义无咎也。" },
  "渐_2": { position: 2, yaoCi: "鸿渐于磐，饮食衎衎，吉", description: "六二：六二之吉，顺以巽也。" },
  "渐_3": { position: 3, yaoCi: "鸿渐于陆，夫征不复，妇孕不育，凶，利御寇", description: "九三：九三征凶，夫不复也。" },
  "渐_4": { position: 4, yaoCi: "鸿渐于木，或得其桷，无咎", description: "六四：或得其桷，顺以巽也。" },
  "渐_5": { position: 5, yaoCi: "鸿渐于陵，妇三岁不孕，终莫之胜，吉", description: "六五：六五之吉，得偶也。" },
  "渐_6": { position: 6, yaoCi: "鸿渐于陆，其羽可用为仪，吉", description: "上九：其羽可用为仪吉，志在外也。" },

  // ==================== 归妹卦（雷泽归妹）====================
  "归妹_1": { position: 1, yaoCi: "归妹以娣，跛能履，征吉", description: "初九：归妹以娣，跛能履吉，相承也。" },
  "归妹_2": { position: 2, yaoCi: "眇能视，利幽人之贞", description: "六二：六二之吉，利幽人之贞，未变常也。" },
  "归妹_3": { position: 3, yaoCi: "归妹以须，反归以娣", description: "九三：归妹以须，未当也。" },
  "归妹_4": { position: 4, yaoCi: "归妹愆期，迟归有时", description: "六四：愆期之志，有待而行也。" },
  "归妹_5": { position: 5, yaoCi: "帝乙归妹，其君之袂，不如其娣之袂良，月几望，吉", description: "六五：六五之吉，其位在中也。" },
  "归妹_6": { position: 6, yaoCi: "女承筐无实，士刲羊无血，无攸利", description: "上六：上六承筐，无实，士刲羊无血，幽不明也。" },

  // ==================== 丰卦（雷火丰）====================
  "丰_1": { position: 1, yaoCi: "遇其配主，虽旬无咎，往有尚", description: "初九：遇其配主，尚往也。" },
  "丰_2": { position: 2, yaoCi: "丰其蔀，日中见斗，往得疑疾，有孚发若，吉", description: "六二：六二之吉，有以发之也。" },
  "丰_3": { position: 3, yaoCi: "丰其沛，日中见昧，折其右肱，无咎", description: "九三：丰其沛，不可大事也。" },
  "丰_4": { position: 4, yaoCi: "丰其蔀，日中见斗，遇其夷主，吉", description: "九四：丰其蔀，位不当也。" },
  "丰_5": { position: 5, yaoCi: "来章，有庆誉，吉", description: "六五：六五之吉，有庆也。" },
  "丰_6": { position: 6, yaoCi: "丰其屋，蔀其家，窥其户，阒其无人，三岁不见，凶", description: "上六：丰其屋，天际翔也。" },

  // ==================== 旅卦（火山旅）====================
  "旅_1": { position: 1, yaoCi: "旅琐琐，斯其所取灾", description: "初六：旅琐琐，志穷灾也。" },
  "旅_2": { position: 2, yaoCi: "旅即次，怀其资，得童仆贞", description: "六二：六二之吉，得中道也。" },
  "旅_3": { position: 3, yaoCi: "旅焚其次，丧其童仆贞，厉", description: "九三：旅焚其次，亦以伤也。" },
  "旅_4": { position: 4, yaoCi: "旅于处，得其资斧，我心不快", description: "九四：旅于处，未得位也。" },
  "旅_5": { position: 5, yaoCi: "射雉一矢亡，终以誉命", description: "六五：六五誉命，上逮也。" },
  "旅_6": { position: 6, yaoCi: "鸟焚其巢，旅人先笑后号啕，丧牛于易，凶", description: "上九：鸟焚其巢，凶，旅人得牛也。" },

  // ==================== 巽卦（巽为风）====================
  "巽_1": { position: 1, yaoCi: "进退，利武人之贞", description: "初六：进退，利武人之贞，志治也。" },
  "巽_2": { position: 2, yaoCi: "巽在床下，用史巫纷若，吉，无咎", description: "九二：纷若之吉，得中也。" },
  "巽_3": { position: 3, yaoCi: "频巽，吝", description: "九三：频巽之吝，志穷也。" },
  "巽_4": { position: 4, yaoCi: "悔亡，田获三品", description: "六四：田获三品，有功也。" },
  "巽_5": { position: 5, yaoCi: "贞吉悔亡，无不利，无初有终，先庚三日，后庚三日，吉", description: "九五：九五之吉，位正中也。" },
  "巽_6": { position: 6, yaoCi: "巽在床下，丧其资斧，贞凶", description: "上九：巽在床下，上穷也。" },

  // ==================== 兑卦（兑为泽）====================
  "兑_1": { position: 1, yaoCi: "和兑，吉", description: "初九：和兑之吉，行未疑也。" },
  "兑_2": { position: 2, yaoCi: "孚兑，吉，悔亡", description: "六二：六二之吉，孚信也。" },
  "兑_3": { position: 3, yaoCi: "来兑，凶", description: "九三：九三之凶，位不当也。" },
  "兑_4": { position: 4, yaoCi: "商兑，未宁，介疾有喜", description: "六四：六四之喜，有庆也。" },
  "兑_5": { position: 5, yaoCi: "孚于剥，有厉", description: "九五：九五之厉，位正当也。" },
  "兑_6": { position: 6, yaoCi: "引兑", description: "上六：上六引兑，未光也。" },

  // ==================== 涣卦（风水涣）====================
  "涣_1": { position: 1, yaoCi: "用拯马壮，吉", description: "初六：初六之吉，顺也。" },
  "涣_2": { position: 2, yaoCi: "涣奔其机，悔亡", description: "九二：涣奔其机，得愿也。" },
  "涣_3": { position: 3, yaoCi: "涣其躬，无悔", description: "六三：六三之吉，志在外也。" },
  "涣_4": { position: 4, yaoCi: "涣其群，元吉，涣有丘，匪夷所思", description: "六四：六四之吉，顺以散也。" },
  "涣_5": { position: 5, yaoCi: "涣汗其大号，涣王居，无咎", description: "九五：九五之吉，正位居也。" },
  "涣_6": { position: 6, yaoCi: "涣其血，去逖出，无咎", description: "上九：涣其血，远害也。" },

  // ==================== 节卦（水泽节）====================
  "节_1": { position: 1, yaoCi: "不出户庭，无咎", description: "初九：不出户庭，知通塞也。" },
  "节_2": { position: 2, yaoCi: "不出门庭，凶", description: "九二：不出门庭，凶，失时极也。" },
  "节_3": { position: 3, yaoCi: "不节若，则嗟若，无咎", description: "六三：不节之嗟，又谁咎也。" },
  "节_4": { position: 4, yaoCi: "安节，亨", description: "六四：安节之亨，顺以巽也。" },
  "节_5": { position: 5, yaoCi: "甘节，吉，往有尚", description: "九五：甘节之吉，居位中也。" },
  "节_6": { position: 6, yaoCi: "苦节，贞凶，悔亡", description: "上六：苦节贞凶，其道穷也。" },

  // ==================== 中孚卦（风泽中孚）====================
  "中孚_1": { position: 1, yaoCi: "虞吉，有它不燕", description: "初九：初九虞吉，志未变也。" },
  "中孚_2": { position: 2, yaoCi: "鹤鸣在阴，其子和之，我有好爵，吾与尔靡之", description: "九二：其子和之，中心愿也。" },
  "中孚_3": { position: 3, yaoCi: "得敌，或鼓或罢，或泣或歌", description: "六三：或鼓或罢，位不当也。" },
  "中孚_4": { position: 4, yaoCi: "月几望，马匹亡，无咎", description: "六四：六四无咎，上合志也。" },
  "中孚_5": { position: 5, yaoCi: "有孚挛如，无咎", description: "九五：有孚挛如，位正当也。" },
  "中孚_6": { position: 6, yaoCi: "翰音登于天，贞凶", description: "上九：翰音登于天，何可长也。" },

  // ==================== 小过卦（雷山小过）====================
  "小过_1": { position: 1, yaoCi: "飞鸟以凶", description: "初六：飞鸟以凶，不可如何也。" },
  "小过_2": { position: 2, yaoCi: "过其祖，遇其妣，不及其君，遇其臣，无咎", description: "六二：不及其君，臣不可过也。" },
  "小过_3": { position: 3, yaoCi: "弗过防之，从或戕之，凶", description: "九三：九三弗过，防之，止未形也。" },
  "小过_4": { position: 4, yaoCi: "无咎，弗过遇之，往厉必戒，勿用永贞", description: "九四：九四无咎，弗过遇之，失意也。" },
  "小过_5": { position: 5, yaoCi: "密云不雨，自我西郊，公弋取彼在穴", description: "六五：密云不雨，已上也。" },
  "小过_6": { position: 6, yaoCi: "弗遇过之，飞鸟离之，凶，是谓灾眚", description: "上六：弗遇过之，亢之为也。" },

  // ==================== 既济卦（水火既济）====================
  "既济_1": { position: 1, yaoCi: "曳其轮，濡其尾，无咎", description: "初九：曳其轮，义无咎也。" },
  "既济_2": { position: 2, yaoCi: "妇丧其茀，勿逐，七日得", description: "六二：七日得，以中道也。" },
  "既济_3": { position: 3, yaoCi: "高宗伐鬼方，三年克之，小人勿用", description: "九三：三年克之，惫也。" },
  "既济_4": { position: 4, yaoCi: "繻有衣物，终日戒", description: "六四：终日戒，有所疑也。" },
  "既济_5": { position: 5, yaoCi: "东邻杀牛，不如西邻之禴祭，实受其福", description: "六五：六五之吉，有庆也。" },
  "既济_6": { position: 6, yaoCi: "濡其首，厉", description: "上六：濡其首厉，何可久也。" },

  // ==================== 未济卦（火水未济）====================
  "未济_1": { position: 1, yaoCi: "濡其尾，吝", description: "初六：濡其尾之吝，不续终也。" },
  "未济_2": { position: 2, yaoCi: "曳其轮，贞吉", description: "九二：九二贞吉，中以行正也。" },
  "未济_3": { position: 3, yaoCi: "未济，征凶，利涉大川", description: "六三：六三未济，征凶，位不当也。" },
  "未济_4": { position: 4, yaoCi: "贞吉，悔亡，震用伐鬼方，三年有赏于大国", description: "九四：九四贞吉，志行也。" },
  "未济_5": { position: 5, yaoCi: "贞吉，无悔，君子之光，有孚，吉", description: "六五：六五贞吉，有孚于中也。" },
  "未济_6": { position: 6, yaoCi: "有孚于饮酒，无咎，濡其首，有孚失是", description: "上九：有孚于饮酒，乐其时也。" }
};

module.exports = yaoData;
