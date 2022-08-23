/**
 * 文案编辑器
 */
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import React, {useState, useEffect} from 'react'
import {Editor, Toolbar} from '@wangeditor/editor-for-react'
import {IDomEditor, IEditorConfig, IToolbarConfig} from '@wangeditor/editor'

const CopyEditor = () => {
    // editor实例
    const [editor, setEditor] = useState<IDomEditor | null>(null)

    // 编辑器
    const [html,setHtml] = useState("<p>hello Zaks</p>")

    useEffect(()=>{
        console.log(html)
    },[html])

    // 工具栏配置
    const toolbarConfig: Partial<IToolbarConfig> = { }

    // 编辑器配置
    const editorConfig: Partial<IEditorConfig> = {    // TS 语法
        // const editorConfig = {                         // JS 语法
        placeholder: '请输入内容...',
    }

    // 及时销毁 editor ，重要！
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])

    return <>
        <div style={{ border: '1px solid #ccc', zIndex: 100}}>
            <Toolbar
                editor={editor}
                defaultConfig={toolbarConfig}
                mode="default"
                style={{ borderBottom: '1px solid #ccc' }}
            />
            <Editor
                defaultConfig={editorConfig}
                value={html}
                onCreated={setEditor}
                onChange={editor => setHtml(editor.getHtml())}
                mode="default"
                style={{ height: '500px', overflowY: 'hidden' }}
            />
        </div>
        {/*<div style={{ marginTop: '15px' }}>*/}
        {/*    {html}*/}
        {/*</div>*/}
    </>
}
export default CopyEditor
