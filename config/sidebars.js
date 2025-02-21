// @ts-check
/**
 * @description sidebars menu
 * @docs https://www.docusaurus.cn/docs/sidebar/items#sidebar-item-category
 */
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // 自动生成目录
    // tutorialSidebar: [{
    //     type: 'autogenerated', //类型
    //     dirName: 'dgiot' // 生成目录
    // }],
    // 手动定义目录
    docs: [
        {
            type: 'category',
            label: 'user_manual',
            collapsible: true,
            collapsed: false,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'user_manual/docs'
                }
            ],
        },
        {
            type: 'category',
            label: 'product_doc',
            collapsible: true,
            collapsed: false,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'product_doc/docs'
                }
            ],
        },
        {
            type: 'category',
            label: 'developer_guid',
            collapsible: true,
            collapsed: false,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'developer_guid/docs'
                }
            ],
        },
        {
            type: 'category',
            label: 'practical_tutorial',
            collapsible: true,
            collapsed: false,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'practical_tutorial/docs'
                }
            ],
        },
    ],
};

module.exports = sidebars;
