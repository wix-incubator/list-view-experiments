//
//  TableViewChildren.m
//  example
//
//  Created by Tal Kol on 6/8/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RNInfiniteScrollViewChildrenManager.h"
#import "RNInfiniteScrollViewChildren.h"

@implementation RNInfiniteScrollViewChildrenManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[RNInfiniteScrollViewChildren alloc] initWithBridge:self.bridge];
}

RCT_EXPORT_VIEW_PROPERTY(rowHeight, float)
RCT_EXPORT_VIEW_PROPERTY(numRenderRows, NSInteger)

@end
