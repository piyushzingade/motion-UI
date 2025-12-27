"use client"

import { useState, memo, useCallback, type KeyboardEvent } from "react"
import { ChevronRight, Folder, FolderOpen, File } from "lucide-react"

interface TreeNode {
    id: string
    name: string
    type: "file" | "folder"
    children?: TreeNode[]
    route?: string
}

const fileTreeData: TreeNode[] = [
    {
        id: "app",
        name: "app",
        type: "folder",
        route: "/",
        children: [
            { id: "app-layout", name: "layout.tsx", type: "file" },
            { id: "app-page", name: "page.tsx", type: "file" },
            { id: "app-globals", name: "globals.css", type: "file" },

            {
                id: "api",
                name: "api",
                type: "folder",
                route: "/api",
                children: [
                    {
                        id: "auth",
                        name: "auth",
                        type: "folder",
                        route: "/api/auth",
                        children: [
                        ],
                    },
                    {
                        id: "user",
                        name: "user",
                        type: "folder",
                        route: "/api/user",
                        children: [
                        ],
                    },
                ],
            },

            {
                id: "dashboard",
                name: "dashboard",
                type: "folder",
                route: "/dashboard",
                children: [
                    { id: "dash-page", name: "page.tsx", type: "file" },
                    { id: "dash-layout", name: "layout.tsx", type: "file" },

                    {
                        id: "analytics",
                        name: "analytics",
                        type: "folder",
                        route: "/dashboard/analytics",
                        children: [
                        ],
                    },
                ],
            },

            {
                id: "auth-pages",
                name: "auth",
                type: "folder",
                route: "/auth",
                children: [
                    { id: "login-page", name: "login.tsx", type: "file" },
                ],
            },
        ],
    },
    {
        id: "components",
        name: "components",
        type: "folder",
        route: "/components",
        children: [
            {
                id: "ui",
                name: "ui",
                type: "folder",
                route: "/components/ui",
                children: [
                    { id: "button", name: "button.tsx", type: "file" },
                ],
            },
            { id: "header", name: "header.tsx", type: "file" },
        ],
    },

    {
        id: "lib",
        name: "lib",
        type: "folder",
        route: "/lib",
        children: [
            { id: "db", name: "db.ts", type: "file" },
        ],
    },

    {
        id: "hooks",
        name: "hooks",
        type: "folder",
        route: "/hooks",
        children: [
            { id: "useAuth", name: "use-auth.ts", type: "file" },
        ],
    },
    {
        id: "context",
        name: "context",
        type: "folder",
        route: "/context",
        children: [
            { id: "theme-context", name: "theme-context.tsx", type: "file" },
        ],
    },
    {
        id: "public",
        name: "public",
        type: "folder",
        route: "/public",
        children: [
            { id: "favicon", name: "favicon.ico", type: "file" },
            { id: "logo", name: "logo.png", type: "file" },
        ],
    },
]


export default function FileTree() {
    const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
        () => new Set()
    )

    const toggleFolder = useCallback((id: string) => {
        setExpandedFolders((prev) => {
            const next = new Set(prev)
            if (next.has(id)) next.delete(id)
            else next.add(id)
            return next
        })
    }, [])

    return (
        <div className="bg-white rounded-lg shadow-lg border border-[#e5e5e5] p-2 max-w-sm w-full">
            <div className="space-y-0.5" role="tree" aria-label="Project file structure">
                {fileTreeData.map((node) => (
                    <TreeItem
                        key={node.id}
                        node={node}
                        level={0}
                        expandedFolders={expandedFolders}
                        toggleFolder={toggleFolder}
                    />
                ))}
            </div>
        </div>
    )
}

interface TreeItemProps {
    node: TreeNode
    level: number
    expandedFolders: Set<string>
    toggleFolder: (id: string) => void
}

const TreeItem = memo(function TreeItemBase({
    node,
    level,
    expandedFolders,
    toggleFolder,
}: TreeItemProps) {
    const isFolder = node.type === "folder"
    const isExpanded = expandedFolders.has(node.id)
    const hasChildren = !!node.children && node.children.length > 0

    // "open" style only for folders
    const isOpen = isFolder && isExpanded


    const hoverTitle = node.route ? `${node.name} — ${node.route}` : node.name

    return (
        <>
            <div
                className={`flex items-center gap-1 py-1.5 px-3 rounded-lg cursor-pointer group outline-none transition-all duration-100          ${isOpen ? "hover:bg-neutral-100" : "hover:bg-neutral-100"}
        `}
                style={{ paddingLeft: `${level * 16}px` }}
                role="treeitem"
                aria-expanded={isFolder ? isExpanded : undefined}
                tabIndex={0}
                onClick={() => {
                    if (isFolder) toggleFolder(node.id)
                }}
                title={hoverTitle}
            >
                {isFolder ? (
                    <>
                        <button
                            type="button"
                            aria-label={isExpanded ? `Collapse folder ${node.name}` : `Expand folder ${node.name}`}
                            title={isExpanded ? `Collapse ${node.name}` : `Expand ${node.name}`} // Chevron text changes on open/close
                            className="flex items-center justify-center h-4 px-1.5 text-neutral-500 group-hover:text-neutral-800 transition-colors shrink-0"
                            onClick={(e) => {
                                e.stopPropagation()
                                toggleFolder(node.id)
                            }}
                        >
                            {hasChildren ? (
                                <ChevronRight
                                    size={16}
                                    className={`transition-transform duration-200 ease-in-out ${isExpanded ? "rotate-90" : ""
                                        }`}
                                />
                            ) : (
                                <div className="w-4" />
                            )}
                        </button>

                        {isExpanded ? (
                            <FolderOpen
                                size={16}
                                className={`shrink-0 transition-colors ${isOpen
                                    ? "text-neutral-800"
                                    : "text-neutral-400 group-hover:text-neutral-700"
                                    }`}
                            />
                        ) : (
                            <Folder
                                size={16}
                                className={`shrink-0 transition-colors ${isOpen
                                    ? "text-neutral-800"
                                    : "text-neutral-400 group-hover:text-neutral-700"
                                    }`}
                            />
                        )}
                    </>
                ) : (
                    <>
                        <div className="w-4 shrink-0" />
                        <File
                            size={16}
                            className="shrink-0 transition-colors text-neutral-400 group-hover:text-neutral-700"
                        />
                    </>
                )}

                <span
                    className={`text-sm ml-1 flex-1 truncate transition-colors ${isOpen
                        ? "text-neutral-800"
                        : "text-neutral-500 group-hover:text-neutral-800"
                        }`}
                >
                    {node.name}
                </span>

                {node.route && (
                    <span
                        className={`text-xs truncate transition-colors ${isOpen
                            ? "text-neutral-700"
                            : "text-neutral-400 opacity-0 group-hover:opacity-100"
                            }`}
                    >
                        {node.route}
                    </span>
                )}
            </div>

            {isFolder && hasChildren && (
                <div
                    className={`grid transition-[grid-template-rows,opacity] duration-200 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                    role="group"
                >
                    <div className="overflow-hidden">
                        {node.children!.map((child) => (
                            <TreeItem
                                key={child.id}
                                node={child}
                                level={level + 1}
                                expandedFolders={expandedFolders}
                                toggleFolder={toggleFolder}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
})
