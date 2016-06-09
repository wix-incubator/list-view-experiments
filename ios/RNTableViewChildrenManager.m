//
//  TableViewChildren.m
//  example
//
//  Created by Tal Kol on 6/8/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RNTableViewChildrenManager.h"
#import "RNTableViewChildren.h"

@implementation RNTableViewChildrenManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[RNTableViewChildren alloc] initWithBridge:self.bridge];
}

RCT_EXPORT_VIEW_PROPERTY(rowHeight, float)
RCT_EXPORT_VIEW_PROPERTY(numRows, NSInteger)

@end
