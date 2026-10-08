import asyncio
import json
import os
import re
import sys
from telethon import TelegramClient
from telethon.sessions import StringSession

async def main():
    api_id = os.getenv("TG_API_ID")
    api_hash = os.getenv("TG_API_HASH")
    session_str = os.getenv("TG_SESSION")
    channel = os.getenv("TG_CHANNEL")

    if not api_id or not api_hash or not session_str or not channel:
        sys.exit(1)

    client = TelegramClient(StringSession(session_str), int(api_id), api_hash)
    await client.start()

    stock_data = {}
    pattern = re.compile(r"^[-*•\s]*([^\n:\-–—=]+?)\s*[:\-–—=]\s*([^\n]+)$")

    async for message in client.iter_messages(channel, limit=10):
        if not message.text:
            continue
        lines = message.text.splitlines()
        matched_in_msg = {}
        for line in lines:
            cleaned = line.strip()
            if not cleaned:
                continue
            m = pattern.match(cleaned)
            if m:
                item = m.group(1).strip()
                status = m.group(2).strip()
                if item and status:
                    matched_in_msg[item] = status
        if matched_in_msg:
            stock_data = matched_in_msg
            break

    await client.disconnect()

    if stock_data:
        with open("stock.json", "w", encoding="utf-8") as f:
            json.dump(stock_data, f, indent=2, ensure_ascii=False)
            f.write("\n")

if __name__ == "__main__":
    asyncio.run(main())
